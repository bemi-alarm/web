import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bemi-morning.leostuart.chatgpt.site"),
  title: { default: "Bemi — One alarm. Zero negotiations.", template: "%s — Bemi" },
  description: "The iPhone alarm that pairs every wake-up with one small mission—so you get out of bed without the snooze spiral.",
  icons: { icon: "/bemi-icon.png", apple: "/bemi-icon.png" },
  openGraph: { title: "Bemi — One alarm. Zero negotiations.", description: "A calmer way to get out of bed for real.", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bemi beside an alarm set for 7:50" }] },
  twitter: { card: "summary_large_image", title: "Bemi — One alarm. Zero negotiations.", description: "A calmer way to get out of bed for real.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
