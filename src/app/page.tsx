import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <Header/>
      <Services/>
      <Testimonials/>
    </div>
  );
};

export default page;
