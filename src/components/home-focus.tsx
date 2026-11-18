import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HomeFocus() {
  return <section className="home-focus"><div className="shell focus-layout"><div className="focus-title"><p className="eyebrow">HOW WE THINK</p><h2>The best technology<br/>feels <em>considered<span className="accent-dot">.</span></em></h2></div><div className="focus-content"><p>We look closely at the business problem, the people using the product, and what needs to change. Then we design and build with those answers in mind.</p><div className="focus-points"><div><span>01</span><strong>Understand the problem</strong></div><div><span>02</span><strong>Design with intention</strong></div><div><span>03</span><strong>Build for what’s next</strong></div></div><Link className="inline-arrow" href="/about">More about our approach <ArrowUpRight size={17}/></Link></div></div></section>;
}
