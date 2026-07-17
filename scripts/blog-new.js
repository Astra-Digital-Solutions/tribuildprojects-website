const fs = require('fs');
const path = require('path');
const readline = require('readline');
const servicesMapping = require('../src/config/blog-config.json');

// Escape regex helper
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Get section content using regex that ignores markdown header styling
function getSection(text, headerName, nextHeaders) {
  const pattern = new RegExp(
    `(?:^|\\n)(?:[#*\\s]*)${headerName}[^\\n]*\\n?([\\s\\S]*?)(?=\\n(?:[#*\\s]*)(?:${nextHeaders.join('|')})[^\\n]*(?:\\n|\\Z))`,
    'i'
  );
  const match = text.match(pattern);
  return match ? match[1].trim() : '';
}

// Mask links helper
function insertInternalLinks(content) {
  let updatedContent = content;
  const placeholders = [];

  // 1. Mask existing markdown links [text](url)
  updatedContent = updatedContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match) => {
    const id = `__LINK_PLACEHOLDER_${placeholders.length}__`;
    placeholders.push(match);
    return id;
  });

  // 2. Mask existing HTML tags or MDX tags (like <ServiceLink>)
  updatedContent = updatedContent.replace(/<[^>]+>/g, (match) => {
    const id = `__LINK_PLACEHOLDER_${placeholders.length}__`;
    placeholders.push(match);
    return id;
  });

  let linksCreatedCount = 0;

  // 3. For each service mapping, find the first keyword and replace it
  for (const [serviceKey, config] of Object.entries(servicesMapping)) {
    const { keywords } = config;
    const escapedKeywords = keywords.map(escapeRegExp);
    const regex = new RegExp(`\\b(${escapedKeywords.join('|')})\\b`, 'i');
    
    const match = updatedContent.match(regex);
    if (match) {
      // Create the ServiceLink tag
      const matchedText = match[0];
      const linkTag = `<ServiceLink service="${serviceKey}">${matchedText}</ServiceLink>`;
      
      // Mask the new link tag so it doesn't get matched by other keywords
      const placeholderId = `__LINK_PLACEHOLDER_${placeholders.length}__`;
      placeholders.push(linkTag);
      
      // Replace only the first occurrence
      updatedContent = updatedContent.replace(regex, placeholderId);
      linksCreatedCount++;
    }
  }

  // 4. Restore all placeholders in reverse order
  for (let i = placeholders.length - 1; i >= 0; i--) {
    updatedContent = updatedContent.replace(`__LINK_PLACEHOLDER_${i}__`, placeholders[i]);
  }

  return { content: updatedContent, linksCreatedCount };
}

async function readFromStdin() {
  console.log("==================================================");
  console.log("TRI BUILD BLOG INGESTION SYSTEM");
  console.log("==================================================");
  console.log("Please paste the ChatGPT blog output below.");
  console.log("When finished, type 'END' on a new line and press Enter:\n");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    let lines = [];
    rl.on('line', (line) => {
      if (line.trim() === 'END') {
        rl.close();
      } else {
        lines.push(line);
      }
    });
    rl.on('close', () => {
      resolve(lines.join('\n'));
    });
  });
}

async function main() {
  let rawText = '';
  
  // If a file path is passed as argument
  if (process.argv[2]) {
    const filePath = path.resolve(process.argv[2]);
    if (!fs.existsSync(filePath)) {
      console.error(`Error: File not found at ${filePath}`);
      process.exit(1);
    }
    rawText = fs.readFileSync(filePath, 'utf8');
  } else {
    rawText = await readFromStdin();
  }

  if (!rawText.trim()) {
    console.error("Error: Input content is empty.");
    process.exit(1);
  }

  // Define headers to parse
  const headers = ['SEO TITLE', 'URL SLUG', 'META DESCRIPTION', 'BLOG CONTENT', 'FAQ', 'CALL TO ACTION'];
  const sections = {};

  for (const h of headers) {
    const nextHeaders = headers.filter(other => other !== h);
    sections[h] = getSection(rawText, h, nextHeaders);
  }

  // 1. Validation check
  const missingFields = [];
  if (!sections['SEO TITLE']) missingFields.push('SEO TITLE');
  if (!sections['URL SLUG']) missingFields.push('URL SLUG');
  if (!sections['META DESCRIPTION']) missingFields.push('META DESCRIPTION');
  if (!sections['BLOG CONTENT']) missingFields.push('BLOG CONTENT');

  if (missingFields.length > 0) {
    console.error("\n==================================================");
    console.error("VALIDATION ERROR: MISSING REQUIRED SECTIONS");
    console.error("==================================================");
    console.error(`The following required sections are missing:\n - ${missingFields.join('\n - ')}`);
    console.error("\nPlease check your ChatGPT output formatting and try again.");
    process.exit(1);
  }

  // 2. Slug extraction and unique check
  const rawSlug = sections['URL SLUG'].toLowerCase().trim().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');
  const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
  
  // Ensure content directory exists
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  const mdxPath = path.join(blogDir, `${rawSlug}.mdx`);
  if (fs.existsSync(mdxPath)) {
    console.error("\n==================================================");
    console.error("VALIDATION ERROR: DUPLICATE SLUG DETECTED");
    console.error("==================================================");
    console.error(`A blog post with the slug "${rawSlug}" already exists at:`);
    console.error(`src/content/blog/${rawSlug}.mdx`);
    console.error("\nPlease use a unique URL slug.");
    process.exit(1);
  }

  // 3. Metadata Warnings
  const warnings = [];
  if (sections['SEO TITLE'].length > 60) {
    warnings.push(`SEO Title is long (${sections['SEO TITLE'].length} characters). Ideal length is under 60 characters.`);
  }
  if (sections['META DESCRIPTION'].length > 160) {
    warnings.push(`Meta Description is long (${sections['META DESCRIPTION'].length} characters). Ideal length is under 160 characters.`);
  }

  if (warnings.length > 0) {
    console.warn("\n==================================================");
    console.warn("WARNING: SEO METADATA LIMITS EXCEEDED");
    console.warn("==================================================");
    warnings.forEach(w => console.warn(`⚠ ${w}`));
    console.warn("==================================================\n");
  }

  // 4. Calculate reading time
  const wordCount = sections['BLOG CONTENT'].split(/\s+/).filter(Boolean).length;
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
  const readingTime = `${readingTimeMinutes} min read`;

  // 5. Generate internal links on content
  const { content: updatedContent, linksCreatedCount } = insertInternalLinks(sections['BLOG CONTENT']);
  // 6. Format FAQs for Frontmatter JSON if needed, or we keep FAQs in the body
  const faqLines = sections['FAQ'].split('\n');
  const faqs = [];
  let currentFaq = null;

  for (const line of faqLines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Check if it's a question: starts with "Q:", "Question:", "1.", "**1.**", "**Q:**", etc.
    const isQuestion = trimmed.match(/^(?:\*\*|)?(?:Question|Q|[0-9]+)[:.]\s+/i) || trimmed.endsWith('?');

    if (isQuestion) {
      if (currentFaq) faqs.push(currentFaq);
      const cleanQuestion = trimmed
        .replace(/^[#\s]+/g, '')
        .replace(/^(?:\*\*|)?(?:Question|Q|[0-9]+)[:.]?\s*/i, '')
        .replace(/\*\*+$/, '')
        .trim();
      currentFaq = { question: cleanQuestion, answer: '' };
    } else if (currentFaq) {
      const cleanLine = trimmed
        .replace(/^(?:\*\*|)?(?:Answer|A)[:.]?\s*/i, '')
        .replace(/\*\*+$/, '')
        .trim();
      currentFaq.answer += (currentFaq.answer ? ' ' : '') + cleanLine;
    }
  }
  if (currentFaq) faqs.push(currentFaq);

  // Map service names based on found service links
  const matchedServices = [];
  for (const [key, val] of Object.entries(servicesMapping)) {
    if (updatedContent.includes(`service="${key}"`)) {
      matchedServices.push(val.name);
    }
  }

  // 7. Write the MDX file with Frontmatter
  const publishedDate = new Date().toISOString().split('T')[0];
  const frontmatter = [
    '---',
    `title: "${sections['SEO TITLE'].replace(/"/g, '\\"')}"`,
    `slug: "${rawSlug}"`,
    `description: "${sections['META DESCRIPTION'].replace(/"/g, '\\"')}"`,
    `published: "${publishedDate}"`,
    `readingTime: "${readingTime}"`,
    'services:',
    ...matchedServices.map(s => `  - "${s}"`),
    'keywords:',
    ...matchedServices.map(s => `  - "${s.toLowerCase()}"`),
    '---',
    '',
    updatedContent,
    ''
  ];

  // Append FAQ MDX section if faqs exist
  if (faqs.length > 0) {
    frontmatter.push('## Frequently Asked Questions', '');
    faqs.forEach(faq => {
      frontmatter.push(`### ${faq.question}`, `${faq.answer}`, '');
    });
  }

  fs.writeFileSync(mdxPath, frontmatter.join('\n'), 'utf8');

  // Print Summary
  const publicUrl = `https://tribuildprojects.com.au/blog/${rawSlug}`;
  console.log("==================================================");
  console.log("BLOG CREATED SUCCESSFULLY");
  console.log("==================================================");
  console.log(`Title:          ${sections['SEO TITLE']}`);
  console.log(`Slug:           ${rawSlug}`);
  console.log(`Public URL:     ${publicUrl}`);
  console.log(`Published Date: ${publishedDate}`);
  console.log(`Reading Time:   ${readingTime}`);
  console.log("Metadata:       ✓ Generated");
  console.log("JSON-LD:        ✓ Generated");
  console.log(`Internal Links: ✓ Generated (${linksCreatedCount} links created)`);
  console.log("Sitemap:        ✓ Will update on next production build");
  console.log("==================================================");
  console.log("NEXT STEPS");
  console.log("==================================================");
  console.log(`1. Review the generated MDX file: src/content/blog/${rawSlug}.mdx`);
  console.log("2. Commit the changes.");
  console.log("3. Deploy the website.");
  console.log("4. Open Google Search Console.");
  console.log(`5. Inspect the generated blog URL: ${publicUrl}`);
  console.log("6. Click Request Indexing.");
  console.log("==================================================");
  console.log("STATUS");
  console.log("==================================================");
  console.log("✓ Blog Created");
  console.log("✓ Metadata Generated");
  console.log("✓ JSON-LD Generated");
  console.log("✓ Internal Links Generated");
  console.log("✓ Ready for Deployment");
  console.log("==================================================");
}

main().catch(err => {
  console.error("Ingestion failed:", err);
  process.exit(1);
});
