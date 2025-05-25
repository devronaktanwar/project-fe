"use client"
import React from "react";
import CountUp from "react-countup";
import { twMerge } from "tailwind-merge";

const Count = () => {
  return (
    <div className="max-screen px-4 pt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-primary-light rounded-lg p-4">
        {data.map((item, index) => (
          <div
            key={item.title || index}
            className={twMerge(
              "flex flex-col gap-2 items-center px-4",
              index != 0 ? "md:border-l border-primary" : "",
              index != 0 && index != 2 ? "border-l border-primary" : ""
            )}
          >
            <p className="text-2xl font-bold text-primary">
              <CountUp end={item.count} duration={2} />
            </p>
            <h4 className="text-sm font-semibold text-gray-700 text-center">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Count;

const data = [
  {
    title: "Hospital Rooms",
    count: 321,
  },
  {
    title: "Doctors",
    count: 78,
  },
  {
    title: "Happy Patients",
    count: 4323,
  },
  {
    title: "Years of Experience",
    count: 12,
  },
];
