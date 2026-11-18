import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaqSection } from "@/components/sections";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Services", description: "Explore website development, mobile apps, custom software, e-commerce, design, and automation services from T Technologies." };

export default function ServicesPage() {
  return <>
    <div className="page-hero shell"><p className="eyebrow">OUR EXPERTISE</p><h1>Technology with<br/><em>a clear purpose<span className="accent-dot">.</span></em></h1><p>We combine design and development to make digital products that solve a real problem and feel good to use.</p></div>
    <section className="service-detail-list section-pad"><div className="shell"><p className="eyebrow">WHAT WE DO</p>{services.map((service) => <article className="service-detail-row" key={service.slug}><div><span>{service.number} / 06</span><h2>{service.name}</h2></div><div><p>{service.detail}</p><ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul><Link className="text-link" href={`/services/${service.slug}`}>Explore this service <ArrowUpRight size={16}/></Link></div></article>)}</div></section>
    <section className="support-strip"><div className="shell"><div><p className="eyebrow light-eyebrow">AFTER LAUNCH</p><h2>Keep it working<span className="accent-dot">.</span><br/><em>Keep it improving<span className="accent-dot">.</span></em></h2></div><div><p>Our work can continue after release. We offer software maintenance, technical support, and measured improvements as your needs change.</p><Link href="/contact" className="button button-light">Ask about support <ArrowUpRight size={18}/></Link></div></div></section>
    <FaqSection/>
  </>;
}
