"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="max-screen pt-6 md:pt-12 px-4">
      <div className="bg-primary rounded-2xl pt-12 pb-6 text-white">
        <div className="flex flex-col gap-3 justify-center items-center px-4">
          <h2 className="text-xl md:text-3xl font-semibold max-w-lg mx-auto text-center">
            What Our Patients Say About Our Medical Treatments
          </h2>
          <p className="text-sm md:text-base max-w-xl text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            perspiciatis minima quos sed ab fuga architecto voluptas, porro
            soluta illo?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 px-6">
          {data.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const data = [
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis minima quos sed ab fuga architecto voluptas, porro soluta illo?",
  },
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis minima quos sed ab fuga architecto voluptas, porro soluta illo?",
  },
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis minima quos sed ab fuga architecto voluptas, porro soluta illo?",
  },
];
