import { NextResponse } from "next/server";

const projectTypes = new Set(["Website", "Mobile app", "Custom software", "E-commerce", "UI/UX design", "Automation / integration", "Something else"]);
const requests = new Map<string, number[]>();

function clean(value: unknown, max: number) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) return NextResponse.json({ message: "The enquiry form is not available yet. Please try again later." }, { status: 503 });
  if (Number(request.headers.get("content-length") || 0) > 10000) return NextResponse.json({ message: "Your message is too long." }, { status: 413 });
  const origin = request.headers.get("origin");
  if (origin) {
    try { if (new URL(origin).host !== new URL(request.url).host) return NextResponse.json({ message: "This request cannot be accepted." }, { status: 403 }); }
    catch { return NextResponse.json({ message: "This request cannot be accepted." }, { status: 403 }); }
  }
  let data: Record<string, unknown>;
  try { data = await request.json(); } catch { return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 }); }
  if (clean(data.website, 100)) return NextResponse.json({ ok: true }); // Honeypot: quietly discard bots.
  const openedAt = Number(data.openedAt);
  if (!Number.isFinite(openedAt) || Date.now() - openedAt < 2500 || Date.now() - openedAt > 86400000) return NextResponse.json({ message: "Please wait a moment and try again." }, { status: 400 });
  const name = clean(data.name, 100);
  const email = clean(data.email, 200);
  const company = clean(data.company, 120);
  const projectType = clean(data.projectType, 80);
  const budget = clean(data.budget, 80);
  const description = clean(data.description, 5000);
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !projectTypes.has(projectType) || description.length < 20) return NextResponse.json({ message: "Please complete the required fields with valid details." }, { status: 400 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (requests.get(ip) || []).filter(time => now - time < 3600000);
  if (recent.length >= 5) return NextResponse.json({ message: "Too many enquiries from this connection. Please try again later." }, { status: 429 });
  requests.set(ip, [...recent, now]);
  const lines = [`Name: ${name}`, `Email: ${email}`, `Company: ${company || "Not supplied"}`, `Project type: ${projectType}`, `Estimated budget: ${budget || "Not supplied"}`, "", "Project description:", description];
  try {
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [process.env.CONTACT_TO_EMAIL], reply_to: email, subject: `New project enquiry: ${projectType}`, text: lines.join("\n") }), cache: "no-store" });
    if (!response.ok) throw new Error(`Email provider returned ${response.status}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact delivery failed", error);
    return NextResponse.json({ message: "Your enquiry could not be delivered. Please try again shortly." }, { status: 502 });
  }
}
