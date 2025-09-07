"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/About" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/properties" },
  { name: "Contact", href: "/Contact" },
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
      ${isSticky ? "bg-white shadow-md" : "bg-black border-b border-gray-400"}
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

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded
                ${isSticky ? "text-black" : "text-white"}
                ${pathname === link.href ? "bg-gray-200 text-black active-links" : ""}  
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        
      </div>
    </nav>
  )
}

export default Nav