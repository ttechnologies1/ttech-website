"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export function FinalCta() {
  const path = usePathname();
  if (path === "/contact" || path === "/privacy" || path === "/terms") return null;

  return <section className="final-cta" aria-labelledby="final-cta-title">
    <div className="shell final-cta-inner">
      <div><p className="eyebrow">THE NEXT STEP</p><h2 id="final-cta-title">Have a project in mind?<br/><em>Let’s make it useful<span className="accent-dot">.</span></em></h2></div>
      <Link href="/contact" className="button button-light">Start a conversation <ArrowUpRight size={18}/></Link>
    </div>
  </section>;
}
