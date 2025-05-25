import React from "react";
import { PiStethoscopeBold } from "react-icons/pi";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="py-10 md:py-12 max-screen">
      <div className="flex flex-col gap-3 justify-center items-center px-4">
        <h2 className="text-xl md:text-3xl font-semibold max-w-lg mx-auto text-center">We Offer Different Services To Improve Your Health</h2>
        <p className="text-sm md:text-base max-w-xl text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          perspiciatis minima quos sed ab fuga architecto voluptas, porro soluta
          illo?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 px-4">
        {data.map((item, index) => (
          <ServiceCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

const data = [
  {
    icon: <PiStethoscopeBold />,
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis minima quos sed ab fuga architecto voluptas, porro soluta illo?",
  },
  {
    icon: <PiStethoscopeBold />,
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis minima quos sed ab fuga architecto voluptas, porro soluta illo?",
  },
  {
    icon: <PiStethoscopeBold />,
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis minima quos sed ab fuga architecto voluptas, porro soluta illo?",
  },
  {
    icon: <PiStethoscopeBold />,
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis minima quos sed ab fuga architecto voluptas, porro soluta illo?",
  },
  {
    icon: <PiStethoscopeBold />,
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis minima quos sed ab fuga architecto voluptas, porro soluta illo?",
  },
  {
    icon: <PiStethoscopeBold />,
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis minima quos sed ab fuga architecto voluptas, porro soluta illo?",
  },
];
