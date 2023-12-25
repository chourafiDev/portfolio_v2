"use client";

import { motion } from "framer-motion";
import { zoomIn } from "@/utils/anim";

const AnimatedCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={zoomIn(0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
