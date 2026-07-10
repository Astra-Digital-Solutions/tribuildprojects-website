import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";

interface ServiceLinkProps {
  service: string;
  children: React.ReactNode;
}

export default function ServiceLink({ service, children }: ServiceLinkProps) {
  // Path to the service page directory
  const pagePath = path.join(process.cwd(), "src", "app", "services", service, "page.tsx");
  const exists = fs.existsSync(pagePath);

  if (exists) {
    return (
      <Link
        href={`/services/${service}`}
        className="text-accent-amber hover:text-accent-amber-hover underline transition-colors"
      >
        {children}
      </Link>
    );
  }

  // If the page doesn't exist yet, render as normal text
  return <span>{children}</span>;
}
