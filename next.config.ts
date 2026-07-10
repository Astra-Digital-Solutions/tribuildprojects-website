import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import fs from "fs";
import path from "path";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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
