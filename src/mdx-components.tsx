import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import React from "react";
import ServiceLink from "@/components/ServiceLink";

// Helper to generate anchor IDs from children
const generateId = (children: React.ReactNode): string => {
  if (!children) return "";
  const text = React.Children.toArray(children)
    .map(child => (typeof child === "string" || typeof child === "number" ? String(child) : ""))
    .join("");
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="text-3xl font-extrabold text-white mt-8 mb-4 sm:text-4xl">{children}</h1>
    ),
    h2: ({ children }) => {
      const id = generateId(children);
      return (
        <h2 id={id} className="text-2xl font-bold text-white mt-10 mb-4 scroll-mt-24 border-b border-slate-900 pb-2">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = generateId(children);
      return (
        <h3 id={id} className="text-xl font-bold text-white mt-8 mb-3 scroll-mt-24">
          {children}
        </h3>
      );
    },
    p: ({ children }) => (
      <p className="text-slate-300 leading-relaxed mb-6 text-base sm:text-lg">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-style-disc list-outside pl-6 mb-6 text-slate-300 space-y-2 text-base sm:text-lg">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-style-decimal list-outside pl-6 mb-6 text-slate-300 space-y-2 text-base sm:text-lg">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-slate-300">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-amber bg-slate-900/20 px-6 py-4 italic my-6 text-slate-400 rounded-r-xl">{children}</blockquote>
    ),
    a: ({ children, href }) => {
      const isInternal = href && (href.startsWith("/") || href.startsWith("https://tribuildprojects.com.au"));
      if (isInternal) {
        return (
          <Link href={href} className="text-accent-amber hover:text-accent-amber-hover underline font-medium transition-colors">
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-amber hover:text-accent-amber-hover underline font-medium transition-colors">
          {children}
        </a>
      );
    },
    table: ({ children }) => (
      <div className="overflow-x-auto my-8 border border-slate-800 rounded-xl">
        <table className="w-full text-sm sm:text-base text-left text-slate-300 border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="text-xs sm:text-sm uppercase bg-slate-900/60 text-slate-200 border-b border-slate-800">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-slate-800/50 bg-slate-950/20">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-slate-900/10 transition-colors">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-6 py-4 font-bold border-r border-slate-800 last:border-r-0">{children}</th>
    ),
    td: ({ children }) => (
      <td className="px-6 py-4 border-r border-slate-800 last:border-r-0">{children}</td>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 p-5 rounded-xl overflow-x-auto border border-slate-850 font-mono text-sm my-6 text-slate-300">{children}</pre>
    ),
    code: ({ children }) => (
      <code className="bg-slate-900/80 px-2 py-0.5 rounded font-mono text-sm text-accent-amber border border-slate-800/50">{children}</code>
    ),
    ServiceLink,
    Link,
  };
}
