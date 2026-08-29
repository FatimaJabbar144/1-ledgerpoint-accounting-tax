import type { LedgerPointData } from "@/types/ledgerpoint";

export function Logo({ brand, footer = false }: { brand: LedgerPointData["brand"]; footer?: boolean }) {
  return <span className={`flex items-center gap-2.5 font-bold tracking-tight ${footer ? "text-white" : "text-navy"}`}><span className="flex h-7 w-[26px] items-end gap-[3px]"><i className="h-3.5 w-1.5 rounded-sm bg-teal not-italic" /><i className="h-[22px] w-1.5 rounded-sm bg-navy not-italic" /><i className="h-7 w-1.5 rounded-sm bg-teal not-italic" /></span><span>{brand.name}<small className={`block text-[8px] font-bold uppercase tracking-[.12em] ${footer ? "text-[#a5b7b9]" : "text-[#647276]"}`}>{brand.descriptor}</small></span></span>;
}
