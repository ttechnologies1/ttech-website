import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Start a conversation with T Technologies about a website, mobile app, software product, or integration." };

export default function ContactPage() {
  const ready = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL);
  return <><div className="page-hero shell contact-hero"><p className="eyebrow">START A PROJECT</p><h1>Let’s make<br/><em>something useful<span className="accent-dot">.</span></em></h1><p>Tell us a little about what you need. We’ll take the conversation from there.</p></div><section className="contact-section"><div className="shell contact-grid"><div className="contact-aside"><p className="eyebrow">GET IN TOUCH</p><h2>A good first<br/>conversation can<br/><em>change everything<span className="accent-dot">.</span></em></h2><p>Whether you have a clear brief or the beginning of an idea, we’re ready to listen.</p><div className="contact-method"><MapPin size={20}/><div><span>LOCATION</span><strong>{site.location}</strong></div></div>{site.email && <a className="contact-method" href={`mailto:${site.email}`}><Mail size={20}/><div><span>EMAIL</span><strong>{site.email}</strong></div></a>}{site.whatsapp && <a className="contact-method" href={site.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/><div><span>WHATSAPP</span><strong>Start a chat</strong></div></a>}{site.phone && <a className="contact-method" href={`tel:${site.phone}`}><div><span>PHONE</span><strong>{site.phone}</strong></div></a>}</div><InquiryForm ready={ready}/></div></section></>;
}
