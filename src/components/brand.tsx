import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="T Technologies home">
      <svg className="brand-mark" viewBox="0 0 56 56" fill="none" role="img" aria-label="T Technologies mark">
        <path d="M4 8h49L44 19H27l-8 8H4l8-8H0L4 8Z" fill="#1268FF" />
        <path d="M27 19h16l-12 13v15L19 55V28l8-9Z" fill="#1268FF" />
        <path d="M31 25v20l-5 4V30l5-5Z" fill="#35ADFF" />
        <path d="M3 31h15M3 40h15M7 49h11" stroke="#299CFF" strokeWidth="2" />
        <circle cx="3" cy="31" r="2.5" fill="#fff" stroke="#299CFF" strokeWidth="2" />
        <circle cx="3" cy="40" r="2.5" fill="#fff" stroke="#299CFF" strokeWidth="2" />
        <circle cx="7" cy="49" r="2.5" fill="#fff" stroke="#299CFF" strokeWidth="2" />
      </svg>
      <span className="brand-text"><strong><span>T</span> Technologies</strong><small>ENGINEERING THE FUTURE</small></span>
    </Link>
  );
}
