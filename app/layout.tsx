import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Bemi — Wake up with one clear mission", template: "%s — Bemi" },
  description: "A morning alarm with sensor-backed wake missions that help you leave the snooze loop.",
  icons: { icon: "/bemi-icon.png", apple: "/bemi-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
