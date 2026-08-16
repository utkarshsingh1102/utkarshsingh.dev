import type { Metadata, Viewport } from "next";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import "./globals.css";

/**
 * Runs before first paint. Light is the default for everyone, so this only has
 * to opt a returning visitor back into dark — no flash either way, and the OS
 * colour-scheme preference is intentionally ignored.
 */
const themeBootScript = `try{if(localStorage.theme==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

/* Matches the server-rendered default. The runtime switch is the CSS
   `color-scheme` on :root / :root.dark, which overrides this meta. */
export const viewport: Viewport = {
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Utkarsh Singh — Data Engineer & Platform Builder",
  description:
    "Data engineer building enterprise lineage platforms, Spark pipelines and the web front-ends that make them usable.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${ibmPlexMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <MotionProvider>
            <AppShell>{children}</AppShell>
            <ThemeToggle />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
