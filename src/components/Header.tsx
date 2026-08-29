"use client";
import { useState } from "react";
import type { LedgerPointData } from "@/types/ledgerpoint";
import { Logo } from "./Logo";

export function Header({ data }: { data: LedgerPointData }) {
  const [open, setOpen] = useState(false);
  return <header className="relative z-10 border-b border-navy/10 bg-cream" id="home"><div className="container flex min-h-[72px] items-center justify-between md:min-h-[82px]"><a href="#home" aria-label={data.brand.homeLabel}><Logo brand={data.brand} /></a><button className="flex flex-col gap-1.5 border-0 bg-transparent p-2 md:hidden" aria-expanded={open} aria-label={data.brand.mobileMenuLabel} onClick={() => setOpen(!open)}><span className="h-0.5 w-[22px] bg-navy" /><span className="h-0.5 w-[22px] bg-navy" /><span className="h-0.5 w-[22px] bg-navy" /></button><nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[72px] flex-col gap-0 border-b border-[#dce4e1] bg-white px-5 pb-6 pt-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`} aria-label={data.navigationAriaLabel}>{data.navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm text-[#4c5b5f] hover:text-teal">{item.label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="button mt-2 justify-center px-4 py-2.5 text-xs md:mt-0">{data.hero.primaryCta}<span>↗</span></a></nav></div></header>;
}
