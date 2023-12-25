import { navItems } from "@/utils/data";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <ul className="lg:flex hidden items-center gap-12 font-normal text-sm">
      {navItems.map(({ title, href }, i) => (
        <li key={title}>
          <Link href={href} className="text-lightest-slate/60">
            <span className="text-green">0{i + 1}.</span> {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
