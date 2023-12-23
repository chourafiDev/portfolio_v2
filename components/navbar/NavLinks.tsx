import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-12 font-normal text-sm">
      <li>
        <Link href="/" className="text-lightest-slate">
          <span className="text-green">01.</span> Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-lightest-slate/60 hover:text-lightest-slate duration-300 ease-linear"
        >
          <span className="text-green">02.</span> About
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className="text-lightest-slate/60 hover:text-lightest-slate duration-300 ease-linear"
        >
          <span className="text-green">03.</span> Works
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="text-lightest-slate/60 hover:text-lightest-slate duration-300 ease-linear"
        >
          <span className="text-green">04.</span> Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
