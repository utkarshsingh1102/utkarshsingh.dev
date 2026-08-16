import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata: Metadata = {
  title: "Work — coming soon",
};

export default function WorkPage() {
  return (
    <AppShell index={false}>
      <ComingSoon
        eyebrow="Work archive"
        titleLead="Coming"
        titleTrail="Soon"
        body="The full case-study archive is being written up — process, decisions and outcomes for every project. Featured work is on the home page in the meantime."
        bandLead="Work"
        bandTrail="Soon"
      />
    </AppShell>
  );
}
