"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ href, text }) {
  const segment = useSelectedLayoutSegment();
  const active = href === `/${segment ? segment : ""}`;

  return (
    <Link className={active ? "underline" : ""} href={href}>
      {text}
    </Link>
  );
}
