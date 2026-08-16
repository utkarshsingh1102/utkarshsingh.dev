import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata: Metadata = {
  title: "Work — Utkarsh Singh",
  description:
    "Applications and cloud workloads I have built end to end. Case studies with the problem, the constraints and the outcome are being written up.",
};

export default function WorkPage() {
  return (
    <ComingSoon
      eyebrow="Work archive"
      titleLead="Coming"
      titleTrail="Soon"
      body="I'm writing these up properly — the problem, the constraints, what I built and what changed for the client. Recent builds are on the home page in the meantime."
      bandLead="Work"
      bandTrail="Soon"
    />
  );
}
