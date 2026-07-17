import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import fs from "fs";
import path from "path";

// Auto-generate existing-services.json at build time
const servicesDir = path.join(process.cwd(), "src", "app", "services");
if (fs.existsSync(servicesDir)) {
  const dirs = fs.readdirSync(servicesDir);
  const existing = dirs.filter(d => fs.existsSync(path.join(servicesDir, d, "page.tsx")));
  const dataDir = path.join(process.cwd(), "src", "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  fs.writeFileSync(
    path.join(dataDir, "existing-services.json"),
    JSON.stringify(existing, null, 2),
    "utf8"
  );
}

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  async redirects() {
    try {
      const filePath = path.join(process.cwd(), "src", "data", "redirects.json");
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
      }
    } catch (e) {
      console.error("Failed to load redirects:", e);
    }
    return [];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "frontmatter" }],
    ],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
