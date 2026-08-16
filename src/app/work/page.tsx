import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata: Metadata = {
  title: "Work — coming soon",
};

export default function WorkPage() {
  return (
    <ComingSoon
      eyebrow="Work archive"
      titleLead="Coming"
      titleTrail="Soon"
      body="The full case-study archive is being written up — process, decisions and outcomes for every project. Featured work is on the home page in the meantime."
      bandLead="Work"
      bandTrail="Soon"
    />
  );
}
