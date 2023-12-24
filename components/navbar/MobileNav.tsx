import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuSlide, scale, slide } from "@/utils/anim";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/utils/assets";
import { IoClose } from "react-icons/io5";
import { navItems } from "@/utils/data";
import Curve from "./Curve";

type ToggleNavProps = {
  handleToggle: () => void;
};

const MobileNav = ({ handleToggle }: ToggleNavProps) => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[#0c1f3b] w-[80%] fixed right-0 top-0 text-white z-50"
    >
      <div
        onMouseLeave={() => {
          setSelectedIndicator(pathname);
        }}
        className="flex flex-col justify-between h-full px-10 py-6"
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </Link>
          <IoClose onClick={handleToggle} className="text-2xl" />
        </div>
        <ul className="space-y-6 font-normal text-base">
          {navItems.map(({ title, href }, index) => (
            <motion.li
              key={index}
              onMouseEnter={() => {
                setSelectedIndicator(href);
              }}
              custom={index}
              variants={slide}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {/* <motion.div
                  variants={scale}
                  animate={isActive ? "open" : "closed"}
                  className={styles.indicator}
                ></motion.div> */}
              <Link href={href} className="text-lightest-slate/60">
                <span className="text-green">0{index + 1}.</span> {title}
              </Link>
            </motion.li>
          ))}
        </ul>

        <Link href="/contact" className="btn btn-white bg-gradient">
          Let&apos;s talk
        </Link>
      </div>

      <Curve />
    </motion.div>
  );
};

export default MobileNav;
