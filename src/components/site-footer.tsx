import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
import { CurrentYear } from "./current-year";
import { navigation, services, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand"><Brand light /><p>{site.tagline}<br />Based in Nigeria. Working worldwide.</p></div>
        <div><h3>Explore</h3>{navigation.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
        <div><h3>What we do</h3>{services.slice(0, 5).map(item => <Link href={`/services/${item.slug}`} key={item.slug}>{item.name}</Link>)}</div>
        <div><h3>Connect</h3>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <Link href="/contact">Project enquiry <ArrowUpRight size={14} /></Link>}{site.phone && <a href={`tel:${site.phone}`}>{site.phone}</a>}{site.whatsapp && <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>}{site.socials.map(link => <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">{link.label}</a>)}</div>
      </div>
      <div className="shell footer-bottom"><span>© <CurrentYear/> T Technologies. All rights reserved.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div><span>Made with intention.</span></div>
    </footer>
  );
}
