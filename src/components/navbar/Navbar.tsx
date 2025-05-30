"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { PiStethoscopeBold } from "react-icons/pi";
import { RiMenu2Fill } from "react-icons/ri";
import MobileNav from "./MobileNav";
import ModalWithDrawer from "../common/ModalWithDrawer";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
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
            <div onClick={() => setOpenModal(true)}>
              <Button className="flex items-center gap-2 !py-6 !px-6">
                <PiStethoscopeBold />
                Book an appointment
              </Button>
            </div>
          </div>
          <div
            className="text-primary md:hidden"
            onClick={() => setOpenMenu(true)}
          >
            <RiMenu2Fill size={24} />
          </div>
          <MobileNav
            open={openMenu}
            setOpen={setOpenMenu}
            navLinks={navLinks}
          />
        </div>
      </div>
      <ModalWithDrawer
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <h1>Hello</h1>
      </ModalWithDrawer>
    </>
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
