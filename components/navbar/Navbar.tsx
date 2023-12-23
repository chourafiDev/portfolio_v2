import React from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavContact from "./NavContact";
import { RobotoMono } from "@/utils/fonts";

const Navbar = () => {
  return (
    <nav
      className={`${RobotoMono.className} flex justify-between items-center py-4`}
    >
      <NavLogo />
      <NavLinks />
      <NavContact />
    </nav>
  );
};

export default Navbar;
