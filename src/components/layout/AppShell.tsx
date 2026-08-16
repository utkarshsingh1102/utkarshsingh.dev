"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { BottomBar } from "@/components/layout/BottomBar";
import { LineNumbers } from "@/components/layout/LineNumbers";
import { ProfileCard } from "@/components/layout/ProfileCard";
import { SidebarLeft } from "@/components/layout/SidebarLeft";
import { SidebarRight } from "@/components/layout/SidebarRight";
import { TopBar } from "@/components/layout/TopBar";
import { PageFade } from "@/components/motion/PageFade";
import { ScrollRoot } from "@/components/motion/ScrollRoot";

/** Only the home page has sections to index. */
const INDEXED_ROUTES = ["/"];

/**
 * From xl up this is a fixed app shell: the top bar, both rails and the bottom
 * bar stay put and only the centre column scrolls. Below xl it falls back to an
 * ordinary scrolling page.
 *
 * It's mounted once in the root layout, so moving between routes never
 * remounts the chrome — the rails keep their state and entrance animation, the
 * right rail slides away on pages with no index, and only the centre column's
 * contents cross-fade.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hasIndex = INDEXED_ROUTES.includes(pathname);
  const firstRender = useRef(true);

  // The scroller persists across routes, so a new page has to be sent back to
  // the top itself — but not on the very first paint, which would fight a
  // deep-link to a #section.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    document.getElementById("main-scroll")?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="xl:flex xl:h-dvh xl:flex-col xl:overflow-hidden">
      <TopBar />

      <div className="flex w-full flex-col xl:min-h-0 xl:flex-1">
        <div className="flex xl:min-h-0 xl:flex-1">
          <SidebarLeft />

          <ScrollRoot
            id="main-scroll"
            className="min-w-0 flex-1 [scrollbar-width:none] xl:overflow-y-auto xl:border-x xl:border-line [&::-webkit-scrollbar]:hidden"
          >
            {/* Below xl the left rail collapses into a stacked header card */}
            <div className="border-b border-line bg-panel xl:hidden">
              <ProfileCard />
            </div>

            {/* The gutter is its own track, laid over the row's left edge; the
                content is inset past it so the two can never overlap. */}
            <div className="relative min-h-full">
              <LineNumbers />

              <div className="min-w-0 px-[20px] pb-[10px] sm:px-[30px] xl:pl-[84px] xl:pr-[48px] 3xl:pl-[116px] 3xl:pr-[72px]">
                <PageFade>{children}</PageFade>
              </div>
            </div>
          </ScrollRoot>

          <SidebarRight visible={hasIndex} />
        </div>

        <BottomBar />
      </div>
    </div>
  );
}
