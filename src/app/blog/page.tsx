import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata: Metadata = {
  title: "Blog — coming soon",
};

export default function BlogPage() {
  return (
    <AppShell index={false}>
      <ComingSoon
        eyebrow="Insights & Ideas"
        titleLead="Coming"
        titleTrail="Soon"
        body="Notes on design systems, front-end craft and the tools I build with are on the way. The latest posts are previewed on the home page."
        bandLead="Blog"
        bandTrail="Soon"
      />
    </AppShell>
  );
}
