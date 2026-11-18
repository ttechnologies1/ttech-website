import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: Props): Promise<Metadata> { const {slug} = await params; const item = services.find(s => s.slug === slug); return { title: item?.name ?? "Service", description: item?.detail }; }
export default async function ServicePage({params}: Props) { const {slug} = await params; const item = services.find(s => s.slug === slug); if (!item) notFound(); return <><div className="page-hero shell detail-hero"><Link className="back-link" href="/services"><ArrowLeft size={16}/> All services</Link><p className="eyebrow">SERVICE / {item.number}</p><h1>{item.name}<span className="accent-dot">.</span></h1><p>{item.detail}</p><Link href="/contact" className="button button-blue">Discuss a project <ArrowUpRight size={17}/></Link></div><section className="detail-body section-pad"><div className="shell detail-grid"><div><p className="eyebrow">WHAT WE CAN HELP WITH</p><h2>Made for your<br/><em>next step<span className="accent-dot">.</span></em></h2></div><div><p>Every engagement starts by understanding where you are, what your users need, and what success means for your business. We then shape the right approach together.</p><ul className="detail-list">{item.deliverables.map((d,i)=><li key={d}><span>0{i+1}</span>{d}<ArrowUpRight size={17}/></li>)}</ul></div></div></section></>; }
