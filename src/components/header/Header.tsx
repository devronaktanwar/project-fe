"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { PiStethoscopeBold } from "react-icons/pi";
import Count from "./Count";
import ModalWithDrawer from "../common/ModalWithDrawer";
import AppointmentForm from "../common/AppointmentForm";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl px-4 md:text-5xl font-semibold text-center max-w-3xl m-auto">
            We Provide <span className="text-primary">Medical</span> Services
            That You Can <span className="text-primary">Trust</span>.
          </h1>
          <p className="text-sm md:text-base text-center max-w-xl m-auto px-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur beatae eveniet culpa ipsum dicta soluta obcaecati vel
            officia dolor.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="p-4 md:p-6" variant={"outline"}>
              About Us
            </Button>
            <Button
              className="flex items-center gap-2 md:p-6"
              onClick={() => setOpenModal(true)}
            >
              <PiStethoscopeBold />
              Book an appointment
            </Button>
          </div>
          {/* <div className="m-auto pt-12">
          <Image
            src="/hero.avif"
            alt="logo"
            width={800}
            height={500}
          />
        </div> */}
          <Count />
        </div>
      </div>
      <ModalWithDrawer
        title="Book an appointment"
        titleClassName="text-xl md:text-2xl font-semibold text-gray-700 text-center"
        isOpen={openModal}
        dialogClassName="!max-w-xl"
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <AppointmentForm />
      </ModalWithDrawer>
    </>
  );
};

export default Header;
