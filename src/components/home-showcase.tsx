"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ProductArt } from "./product-art";

const previews = [
  { label: "Business systems", kind: "dashboard", title: "A clearer view of the work", detail: "One place for the information a team needs to move forward." },
  { label: "Web experiences", kind: "commerce", title: "Made to be explored", detail: "Digital storefronts with room for a brand to feel like itself." },
  { label: "Mobile products", kind: "mobile", title: "Useful in the moments that matter", detail: "Thoughtful mobile journeys built around real people." },
] as const;

export function HomeShowcase() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const preview = previews[active];

  return <div className="home-showcase">
    <div className="showcase-heading"><span>WHAT WE BUILD</span><span>0{active + 1} / 03</span></div>
    <div className={`showcase-stage showcase-${preview.kind}`}>
      <div className="stage-side-label">T TECHNOLOGIES / PRODUCT THINKING</div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={preview.kind} className="showcase-screen" initial={reduceMotion ? false : { opacity: 0, y: 18, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0, y: -10, scale: .99 }} transition={{ duration: reduceMotion ? 0 : .35, ease: [0.22, 1, 0.36, 1] }}>
          <div className="screen-chrome"><span className="screen-dots"><i/><i/><i/></span><span>Interface concept</span><span className="screen-chrome-right">↗</span></div>
          <ProductArt kind={preview.kind}/>
        </motion.div>
      </AnimatePresence>
      <div className="stage-corner-mark" aria-hidden="true">T<span>+</span></div>
    </div>
    <div className="showcase-controls">
      <div className="showcase-description"><span>ILLUSTRATIVE INTERFACE / NOT CLIENT WORK</span><h2>{preview.title}</h2><p>{preview.detail}</p></div>
      <div className="showcase-options" aria-label="Choose an interface preview">{previews.map((item, index) => <button key={item.kind} type="button" onClick={() => setActive(index)} aria-pressed={active === index}><span>0{index + 1}</span>{item.label}</button>)}</div>
    </div>
  </div>;
}
