"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
});

/**
 * Live "My time:" clock in the top bar. Renders empty on the server so the
 * markup matches on hydration, then fills in on the client.
 */
export function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 10_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning className="leading-[14.4px] tabular-nums">
      {time}
    </span>
  );
}
