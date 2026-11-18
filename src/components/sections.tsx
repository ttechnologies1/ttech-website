import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MoveUpRight, Plus } from "lucide-react";
import { clients, differentiators, faqs, industries, process, projects, services, testimonials } from "@/lib/site";
import { HomeShowcase } from "./home-showcase";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function HomeHero() {
  return <section className="hero" aria-labelledby="hero-title"><div className="shell"><div className="hero-intro"><p className="eyebrow"><span className="status-dot"/> DESIGN + ENGINEERING / NIGERIA & WORLDWIDE</p><h1 id="hero-title">Digital products that<br/><em>move you forward<span className="accent-dot">.</span></em></h1><p className="hero-description">We make websites, apps, and business software that work beautifully and make a real difference to the people using them.</p><div className="hero-actions"><Link href="/contact" className="button button-blue">Start a project <ArrowUpRight size={18}/></Link><Link href="/work" className="hero-secondary">Explore our work <ArrowRight size={18}/></Link></div></div><HomeShowcase/></div></section>;
}

export function ClientsSection() {
  return <section className="clients-section"><div className="shell clients-inner"><div className="clients-intro"><span className="eyebrow">PARTNERSHIPS</span><p>Good work starts with<br/>good conversations<span className="accent-dot">.</span></p></div><div className="clients-slots" aria-label={clients.length ? "Client logos" : "Client logos awaiting approval"}>{clients.length ? clients.map(client => <div key={client.name}><Image src={client.logoSrc} alt={`${client.name} logo`} width={150} height={56} /></div>) : <><div>YOUR CLIENT LOGO</div><div>YOUR CLIENT LOGO</div><div>YOUR CLIENT LOGO</div></>}</div><p className="clients-note">{clients.length ? "Client identities shown with permission." : "Client logos will be added with permission."}</p></div></section>;
}

export function ServicesSection({ preview = false }: { preview?: boolean }) {
  const shown = preview ? services.slice(0, 4) : services;
  return <section className="services-section section-pad" id="services"><div className="shell"><SectionHeading eyebrow="01 / WHAT WE DO" title={<>The right tools for<br/><em>what comes next<span className="accent-dot">.</span></em></>} text="From the first idea to the details after launch, we bring design and engineering together around your goals."/><div className="service-list">{shown.map((service) => <Reveal key={service.slug}><Link href={`/services/${service.slug}`} className="service-row"><span className="service-number">{service.number}</span><h3>{service.name}</h3><p>{service.short}</p><span className="service-arrow"><ArrowUpRight size={22}/></span></Link></Reveal>)}</div>{preview && <Link href="/services" className="inline-arrow">All services <ArrowUpRight size={17}/></Link>}</div></section>;
}

export function WorkSection({ preview = false }: { preview?: boolean }) {
  return <section className="work-section section-pad" id="work"><div className="shell">{preview ? <SectionHeading eyebrow="02 / SELECTED WORK" title={<>A glimpse of what<br/><em>we can create<span className="accent-dot">.</span></em></>} text="These interface concepts show our approach to different product challenges. Real client projects will appear here once approved."/> : <p className="eyebrow work-list-label">CONCEPT EXPLORATIONS / NOT CLIENT PROJECTS</p>}<div className="work-grid">{(preview ? projects.slice(0, 2) : projects).map(project => <Reveal key={project.slug}><ProjectCard project={project}/></Reveal>)}</div>{preview && <div className="work-more"><Link href="/work" className="button button-dark">Explore all work <ArrowUpRight size={17}/></Link></div>}</div></section>;
}

export function WhySection() {
  return <section className="why-section section-pad"><div className="shell why-grid"><div className="why-heading"><p className="eyebrow light-eyebrow">03 / OUR APPROACH</p><h2>Good technology<br/>starts with <em>good<br/>thinking<span className="accent-dot">.</span></em></h2><p>We care about how a product looks. We care just as much about the work it needs to do.</p><div className="why-emblem"><span>THINK</span><span>DESIGN</span><span>BUILD</span><MoveUpRight size={42}/></div></div><div className="why-list">{differentiators.map(([title, description], i) => <Reveal key={title}><div className="why-item"><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div><Plus size={17} aria-hidden="true"/></div></Reveal>)}</div></div></section>;
}

export function ProcessSection() {
  return <section className="process-section section-pad"><div className="shell"><SectionHeading eyebrow="04 / HOW WE WORK" title={<>A clear path<br/><em>from idea to launch<span className="accent-dot">.</span></em></>} text="A practical process keeps everyone aligned, helps decisions move forward, and leaves room to learn along the way."/><div className="process-grid">{process.map(([n, title, description]) => <Reveal key={n}><div className="process-step"><span className="process-num">{n}</span><div className="process-rule"/><h3>{title}</h3><p>{description}</p></div></Reveal>)}</div></div></section>;
}

export function IndustriesSection() {
  return <section className="industries-section section-pad"><div className="shell industries-grid"><div><p className="eyebrow">05 / WHERE WE CAN HELP</p><h2>Different fields<span className="accent-dot">.</span><br/><em>Shared ambition<span className="accent-dot">.</span></em></h2><p>Every industry has its own language and constraints. We begin by learning yours.</p><span className="industries-asterisk">✳</span></div><div className="industry-list">{industries.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><strong>{item}</strong><ArrowUpRight size={18} aria-hidden="true"/></div>)}</div></div></section>;
}

export function TestimonialSection() {
  return <section className="testimonial-section"><div className="shell testimonial-grid"><div><p className="eyebrow">CLIENT WORDS</p><h2>Proof belongs<br/>to the people<br/><em>we work with<span className="accent-dot">.</span></em></h2></div><div className="testimonial-empty">{testimonials.length ? testimonials.map((item, index) => <blockquote className="testimonial-entry" key={`${item.name}-${index}`}><span className="quote-mark">“</span><p>{item.quote}</p><footer>{item.photoSrc && <Image src={item.photoSrc} alt="" width={44} height={44}/>}<span><strong>{item.name}</strong><small>{item.role}, {item.company}</small></span>{item.logoSrc && <Image src={item.logoSrc} alt={`${item.company} logo`} width={95} height={35}/>}</footer></blockquote>) : <><span className="quote-mark">“</span><p>Approved client feedback will live here. We only publish testimonials with the client’s permission.</p><span className="placeholder-caption">TESTIMONIAL SPACE / AWAITING APPROVED CONTENT</span></>}</div></div></section>;
}

export function AboutTeaser() {
  return <section className="about-teaser section-pad"><div className="shell about-teaser-grid"><div className="about-panel"><span>THE PEOPLE BEHIND THE PRODUCT</span><div className="about-panel-mark">T<span>✳</span></div><small>Team photography and founder story can be added here.</small></div><div className="about-teaser-copy"><p className="eyebrow">06 / ABOUT T TECHNOLOGIES</p><h2>Curious minds<span className="accent-dot">.</span><br/><em>Practical work<span className="accent-dot">.</span></em></h2><p>We’re a technology company based in Nigeria, building digital experiences for organizations here and abroad. Our work brings thoughtful design and dependable engineering into the same conversation.</p><Link href="/about" className="inline-arrow">Get to know us <ArrowUpRight size={17}/></Link></div></div></section>;
}

export function FaqSection() {
  return <section className="faq-section section-pad"><div className="shell faq-grid"><div><p className="eyebrow">GOOD TO KNOW</p><h2>Before we<br/><em>get started<span className="accent-dot">.</span></em></h2><p>Have another question? <Link href="/contact">Send us a note.</Link></p></div><div className="faq-list">{faqs.map(({question, answer}) => <details key={question}><summary><span>{question}</span><Plus size={19} aria-hidden="true"/></summary><p>{answer}</p></details>)}</div></div></section>;
}
