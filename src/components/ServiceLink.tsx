import React from "react";
import Link from "next/link";
import existingServices from "@/data/existing-services.json";

interface ServiceLinkProps {
  service: string;
  children: React.ReactNode;
}

export default function ServiceLink({ service, children }: ServiceLinkProps) {
  const exists = existingServices.includes(service);

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
