import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, y: -20 }} // Initial state of the animation
          animate={{ opacity: 1, y: 0 }} // Desired animated state
          transition={{ delay: index * 0.1 }} // Delay each item by 0.1s
        >
          <div className="m-2 p-2"></div>
          <NavLink href={link.path} title={link.title} />
        </motion.li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
