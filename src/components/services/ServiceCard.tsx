import React, { FC } from "react";

const ServiceCard: FC<IServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 border p-4 rounded-xl shadow-xs">
      <div className="text-3xl bg-primary-light h-fit p-2 rounded-lg text-primary">{icon}</div>
      <div className="flex flex-col gap-2">
        <h2 className="text-base md:text-lg font-semibold">{title}</h2>
        <p className="text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
interface IServiceCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}
