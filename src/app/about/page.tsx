import type { Metadata } from "next";
import { differentiators } from "@/lib/site";
import { IndustriesSection, ProcessSection } from "@/components/sections";

export const metadata: Metadata = { title: "About Us", description: "Learn how T Technologies approaches design, engineering, and practical business problems." };
export default function AboutPage() {
  return <>
    <div className="page-hero shell"><p className="eyebrow">ABOUT T TECHNOLOGIES</p><h1>Thoughtful by design<span className="accent-dot">.</span><br/><em>Practical by nature<span className="accent-dot">.</span></em></h1><p>We bring design and engineering together to build technology that helps people do something better.</p></div>
    <section className="about-story section-pad"><div className="shell about-story-grid"><div><p className="eyebrow">WHAT DRIVES US</p><h2>Useful work, made with care<span className="accent-dot">.</span></h2></div><div><p>T Technologies is a technology company based in Nigeria and serving clients locally and internationally. We work across websites, mobile products, custom applications, and the systems that connect them.</p><p>Our starting point is simple: understand the business problem, pay attention to the people using the product, and make deliberate choices in design and code.</p><p>There’s room here for the company’s real story, founder information, and team photography when you’re ready to share them.</p></div></div><div className="shell team-placeholder"><span>TEAM / FOUNDER PHOTOGRAPHY</span><p>Add genuine imagery and approved biographies here.</p></div></section>
    <section className="values-section section-pad"><div className="shell"><p className="eyebrow">THE WAY WE THINK</p><div className="values-list">{differentiators.map(([title, desc],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <ProcessSection/><IndustriesSection/>
  </>;
}
