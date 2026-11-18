import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, text, dark = false, aside }: { eyebrow: string; title: ReactNode; text?: string; dark?: boolean; aside?: ReactNode }) {
  return <div className={`section-heading ${dark ? "section-heading-dark" : ""}`}><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{text && <p className="section-intro">{text}</p>}{aside}</div>;
}
