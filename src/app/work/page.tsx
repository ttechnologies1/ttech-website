import type { Metadata } from "next";
import { WorkSection } from "@/components/sections";

export const metadata: Metadata = { title: "Our Work", description: "Explore digital product interface concepts from T Technologies. Verified client case studies will be added with permission." };
export default function WorkPage() { return <><div className="page-hero shell"><p className="eyebrow">OUR WORK</p><h1>Ideas made<br/><em>tangible<span className="accent-dot">.</span></em></h1><p>Explore concept interfaces across commerce, mobile, education, and operations. Approved client case studies will be added here.</p></div><WorkSection/></>; }
