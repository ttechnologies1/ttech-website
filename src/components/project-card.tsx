import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductArt } from "./product-art";
import { projects } from "@/lib/site";

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return <article className="project-card"><Link href={`/work/${project.slug}`} className={`project-visual tone-${project.tone}`} aria-label={`View ${project.title} concept case study`}><span className="concept-label">CONCEPT PREVIEW</span><ProductArt kind={project.art}/><span className="project-visual-arrow"><ArrowUpRight size={22}/></span></Link><div className="project-meta"><span>{project.category}</span><span>{project.number} / 04</span></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><Link href={`/work/${project.slug}`} className="text-link">View case study <ArrowUpRight size={17}/></Link></div></article>;
}
