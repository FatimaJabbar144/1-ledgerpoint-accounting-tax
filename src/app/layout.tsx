import type { Metadata } from "next";
import "./globals.css";
import data from "@/data/ledgerpoint-data.json";

export const metadata: Metadata = { title: `${data.brand.name} ${data.brand.descriptor}`, description: data.hero.description };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
