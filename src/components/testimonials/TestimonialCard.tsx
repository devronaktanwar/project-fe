import React, { FC } from "react";

const TestimonialCard: FC<ITestimonialCardProps> = ({ name, review }) => {
  return (
    <div className="border p-4 bg-white text-black rounded-lg">
      <div className="flex flex-col gap-2">
        <p className="sm:text-base text-sm text-gray-600">{review}</p>
        <h3 className="text-right font-medium">{name}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
interface ITestimonialCardProps {
  name: string;
  review: string;
}
