"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";

type State = "idle" | "loading" | "success" | "error";
const projectTypes = ["Website", "Mobile app", "Custom software", "E-commerce", "UI/UX design", "Automation / integration", "Something else"];

export function InquiryForm({ ready }: { ready: boolean }) {
  const [status, setStatus] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const openedAt = useRef(0);
  useEffect(() => { openedAt.current = Date.now(); }, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("loading");
    setMessage("");
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, openedAt: openedAt.current }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Your message could not be sent. Please try again.");
      setStatus("success");
      setMessage("Thanks for getting in touch. Your enquiry has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Your message could not be sent. Please try again.");
    }
  }

  return <div className="inquiry-panel"><div className="form-heading"><span>PROJECT ENQUIRY</span><span>01 — 06</span></div>{!ready && <div className="form-setup" role="status"><strong>Enquiry form setup pending</strong><p>The email service has not been configured yet. The form will be available once the site owner adds the required server settings.</p></div>}<form onSubmit={submit} noValidate={false}><div className="form-row"><label>Full name <span>*</span><input name="name" type="text" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your name" disabled={!ready}/></label><label>Email address <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={200} placeholder="you@company.com" disabled={!ready}/></label></div><div className="form-row"><label>Company or business<input name="company" type="text" autoComplete="organization" maxLength={120} placeholder="Optional" disabled={!ready}/></label><label>Project type <span>*</span><select name="projectType" required defaultValue="" disabled={!ready}><option value="" disabled>Select a service</option>{projectTypes.map(type => <option key={type} value={type}>{type}</option>)}</select></label></div><label>Estimated budget<input name="budget" type="text" maxLength={80} placeholder="Optional — a range is fine" disabled={!ready}/></label><label>Tell us about your project <span>*</span><textarea name="description" rows={5} minLength={20} maxLength={5000} required placeholder="What are you building? What would you like it to help you achieve?" disabled={!ready}/></label><div className="hp-field" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div><p className="form-privacy">By sending an enquiry, you agree to our <a href="/privacy">Privacy Policy</a>. We’ll use your details to respond to your request.</p><button type="submit" className="button button-blue" disabled={!ready || status === "loading"}>{status === "loading" ? <>Sending <LoaderCircle size={18} className="spin"/></> : <>Send enquiry <ArrowUpRight size={18}/></>}</button><div className={`form-message form-message-${status}`} role={status === "error" ? "alert" : "status"} aria-live="polite">{message}</div></form></div>;
}
