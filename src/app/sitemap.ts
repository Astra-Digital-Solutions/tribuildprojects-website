import type { MetadataRoute } from 'next'
import { allPublicPages } from '@/config/navigation'
import fs from 'fs'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://tribuildprojects.com.au'
  const currentDate = new Date()

  // Generate sitemap items for static pages
  const staticPages = allPublicPages.map((page) => ({
    url: `${baseUrl}${page.href === '/' ? '' : page.href}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Add blog page entries dynamically from MDX files
  const blogDir = path.join(process.cwd(), 'src/content/blog')
  let blogPages: MetadataRoute.Sitemap = []

  if (fs.existsSync(blogDir)) {
    const filenames = fs.readdirSync(blogDir)
    const blogEntries = await Promise.all(
      filenames
        .filter((fn) => fn.endsWith('.mdx'))
        .map(async (filename) => {
          const slug = filename.replace(/\.mdx$/, '')
          const { frontmatter } = await import(`@/content/blog/${filename}`)
          return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(frontmatter.published),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
          }
        })
    )
    blogPages = blogEntries
  }

  // Add the main Blog Archive page entry
  const blogArchiveEntry = {
    url: `${baseUrl}/blog`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }

  return [...staticPages, blogArchiveEntry, ...blogPages]
}
