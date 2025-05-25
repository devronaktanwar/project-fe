"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { PiStethoscopeBold } from "react-icons/pi";
import { RiMenu2Fill } from "react-icons/ri";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4 sticky top-0 px-4">
      <div className="max-screen border p-4 rounded-lg bg-white/10 backdrop-blur-lg flex justify-between items-center">
        <h1 className="flex-1">
          <Image src="/logo.png" alt="logo" width={140} height={100} />
        </h1>
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="font-medium">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div>
            <Button className="flex items-center gap-2 !py-6 !px-6">
              <PiStethoscopeBold />
              Book an appointment
            </Button>
          </div>
        </div>
        <div className="text-primary md:hidden" onClick={() => setOpen(true)}>
          <RiMenu2Fill size={24} />
        </div>
        <MobileNav open={open} setOpen={setOpen} navLinks={navLinks} />
      </div>
    </div>
  );
};

export default Navbar;

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
