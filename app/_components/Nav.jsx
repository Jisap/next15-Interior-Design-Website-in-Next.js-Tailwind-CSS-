"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/About" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/properties" },
  { name: "Contact", href: "/Contact" },
]

const Nav = () => {

  const navRef = useRef(null);
  const tl = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // GSAP animation for the side menu
  useGSAP(() => {
    const sideMenu = navRef.current.querySelector('.side-menu');
    const menuItems = navRef.current.querySelectorAll('.menu li');

    // Set initial state to hidden
    gsap.set(sideMenu, { autoAlpha: 0, height: 0 });

    tl.current = gsap.timeline({ paused: true })
      .to(sideMenu, { 
        autoAlpha: 1,
        height: 'auto', 
        duration: 0.4, 
        ease: 'power2.inOut' 
      })
      .from(menuItems, {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: 'power1.out'
      }, "-=0.2");
  }, { scope: navRef });

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

  // Control the animation with state
  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isSticky || pathname !== "/" ? "bg-white shadow-md" : "bg-transparent border-b border-gray-400"}
    `}>
      <div className="flex justify-between items-center px-[8%] lg:px-[12%] py-6">
        <Link 
          href="/"
          className={`
            text-5xl font-bold font-bricolage logo 
            ${isSticky || pathname !== "/" ? "text-black" : "text-white"}
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
                ${isSticky || pathname !== "/" ? "text-black" : "text-white"}
                ${pathname === link.href ? "bg-gray-200 text-black active-links" : ""}  
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex space-x-4">
          <a href="#">
            <i className={`bi bi-facebook text-xl ${isSticky || pathname !== "/" ? "text-black" : "text-white"}`}></i>
          </a>
          <a href="#">
            <i className={`bi bi-instagram text-xl ${isSticky || pathname !== "/" ? "text-black" : "text-white"}`}></i>
          </a>
        </div>

        {/* Mobile Menu button */}
        <button 
          className={`lg:hidden text-2xl ${isSticky || pathname !== "/" ? "text-black" : "text-white"}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="ri-menu-2-fill"></i>
        </button>
      </div>

      {/* SideMenu */}
      <div className="lg:hidden bg-white text-black p-6 side-menu overflow-hidden">
        <ul className="space-y-4 menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="block text-lg" 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav