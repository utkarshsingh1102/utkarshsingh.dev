import type { ReactNode } from "react";
import { BottomBar } from "@/components/layout/BottomBar";
import { ProfileCard } from "@/components/layout/ProfileCard";
import { SidebarLeft } from "@/components/layout/SidebarLeft";
import { SidebarRight } from "@/components/layout/SidebarRight";
import { TopBar } from "@/components/layout/TopBar";
import { PageFade } from "@/components/motion/PageFade";
import { ScrollRoot } from "@/components/motion/ScrollRoot";

/**
 * From xl up this is a fixed app shell: the top bar, both rails and the bottom
 * bar stay put and only the centre column scrolls. Below xl it falls back to an
 * ordinary scrolling page. Pages without an index (the coming-soon routes) drop
 * the right rail, and the centre column takes the freed width.
 */
export function AppShell({
  children,
  index = true,
}: {
  children: ReactNode;
  index?: boolean;
}) {
  return (
    <div className="xl:flex xl:h-dvh xl:flex-col xl:overflow-hidden">
      <TopBar />

      <div className="flex w-full flex-col xl:min-h-0 xl:flex-1">
        <div className="flex xl:min-h-0 xl:flex-1">
          <SidebarLeft />

          <ScrollRoot
            id="main-scroll"
            className={`min-w-0 flex-1 [scrollbar-width:none] xl:overflow-y-auto xl:border-l xl:border-line [&::-webkit-scrollbar]:hidden ${
              index ? "xl:border-r" : ""
            }`}
          >
            {/* Below xl the left rail collapses into a stacked header card */}
            <div className="border-b border-line bg-panel xl:hidden">
              <ProfileCard />
            </div>

            {/* Content fills the whole centre column — the sections below
                widen their own grids and measures as the space grows. */}
            {/* Equal gutters either side of the centre column */}
            <div className="px-[20px] sm:px-[30px] xl:px-[48px] 3xl:px-[72px]">
              <PageFade>{children}</PageFade>
            </div>
          </ScrollRoot>

          {index ? <SidebarRight /> : null}
        </div>

        <BottomBar />
      </div>
    </div>
  );
}
