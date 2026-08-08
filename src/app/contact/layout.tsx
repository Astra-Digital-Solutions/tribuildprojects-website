import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Request a Quote | Tri Build Projects",
  description: "Contact Tri Build Projects for residential scaffolding, edge protection, roof access, and temporary fencing in Sydney. Get a quote within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
