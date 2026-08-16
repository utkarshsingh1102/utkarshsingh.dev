import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata: Metadata = {
  title: "Blog — Utkarsh Singh",
  description:
    "Notes on building applications, running them in the cloud, and what breaks at scale.",
};

export default function BlogPage() {
  return (
    <ComingSoon
      eyebrow="Insights &amp; Ideas"
      titleLead="Coming"
      titleTrail="Soon"
      body="Notes on building applications, running them in the cloud, and what breaks when real traffic shows up — written as I hit the problems, not from a content calendar."
      bandLead="Blog"
      bandTrail="Soon"
    />
  );
}
