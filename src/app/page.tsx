import data from "@/data/ledgerpoint-data.json";
import type { LedgerPointData } from "@/types/ledgerpoint";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const siteData = data as LedgerPointData;
export default function Home() { return <><Header data={siteData} /><main><Hero data={siteData.hero} /><About data={siteData.about} trustPoints={siteData.trustPoints} /><Services data={siteData.services} /><WhyChooseUs data={siteData.whyUs} /><Process data={siteData.process} /><CTA data={siteData.cta} /><Contact data={siteData.contact} /></main><Footer data={siteData} /></>; }
