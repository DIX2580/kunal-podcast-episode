import React, { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Episodes",
    path: "/Episodes",
  },
  {
    title: "Blogs",
    path: "/Blogs",
  },
  {
    title: "Subscribe",
    path: "/Subscribe",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Variants for animations
  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <nav className="">
        <div className="">
          <div className="flex items-center gap-11 pe-5 space-x-20 justify-evenly ">
          
            <div className=""> 
              <Image 
                src="/mishkaproductions.png" 
                width={90} 
                height={100} 
                alt="Mishka Productions"
              />
            </div>
            <div></div> 

            <div className="md:hidden">
              {!navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen(true)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <Bars3Icon className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
            <div className="hidden md:block">
              <motion.ul
                className="flex font-bold gap-10 text-2sm ml-1"
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link, index) => (
                  <motion.li key={index} className="ml-8" variants={variants}>
                    <NavLink href={link.path} title={link.title} />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
        {navbarOpen && <MenuOverlay links={navLinks} />}
      </nav>
    </div>
  );
};

export default Navbar;