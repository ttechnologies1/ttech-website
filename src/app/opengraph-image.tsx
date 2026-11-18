import { ImageResponse } from "next/og";

export const alt = "T Technologies — Technology built for the way you work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0d151c", color: "#f8f9f8", padding: 70, fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}><div style={{ color: "#1268ff", fontSize: 72, fontWeight: 900, lineHeight: 1 }}>T</div><div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -2 }}>T Technologies</div></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}><div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, letterSpacing: -4, lineHeight: 1.05 }}><span>Technology built for</span><span>the way you work.</span></div><div style={{ width: 90, height: 7, background: "#1268ff" }} /></div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#91a5b7", fontSize: 21 }}><span>DESIGN + ENGINEERING</span><span>NIGERIA / WORLDWIDE</span></div>
    </div>,
    size,
  );
}
