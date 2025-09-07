"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/properties" },
  { name: "Contact", href: "/contact" },
]

const Nav = () => {


  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isSticky ? "bg-white shadow-md" : "bg-transparent border-b border-gray-400"}
    `}>
      <div className="flex justify-between items-center px-[8%] lg:px-[12%] py-6">
        <Link 
          href="/"
          className={`
            text-5xl font-bold font-bricolage logo 
            ${isSticky ? "text-black" : "text-white"}
          `}
        >
          Livin<span className="text-orange-500 font-bricolage">Lines</span>
        </Link>
      </div>
    </nav>
  )
}

export default Nav