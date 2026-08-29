import type { LedgerPointData } from "@/types/ledgerpoint";
import { Logo } from "./Logo";

export function Footer({ data }: { data: LedgerPointData }) { return <footer className="bg-[#0e293f] py-10 text-white"><div className="container flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between"><a href="#home"><Logo brand={data.brand} footer /></a><p className="m-0 font-serif text-sm text-[#a5b7b9]">{data.brand.tagline}</p><a href="#home" className="text-xs text-[#b5c7c7]">{data.footer.backToTop}</a></div><div className="container flex justify-between pt-4 text-[10px] text-[#8ea4a6]"><span>{data.footer.copyright}</span><span>{data.footer.closing}</span></div></footer>; }
