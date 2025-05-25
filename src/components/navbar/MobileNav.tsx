import React, { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PiStethoscopeBold } from "react-icons/pi";

const MobileNav: FC<IMobileNavProps> = ({ open, setOpen, navLinks }) => {
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[300px]">
          <SheetHeader>
            <SheetTitle>
              <Image src="/logo.png" alt="logo" width={140} height={80} />
            </SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="font-medium">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-2">
            <Button className="flex items-center gap-2 !py-6 !px-6">
              <PiStethoscopeBold />
              Book an appointment
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
interface IMobileNavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: {
    name: string;
    href: string;
  }[];
}
