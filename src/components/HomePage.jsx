// src/components/HomePage.jsx
import React from "react";
import VideoHero from "./VideoHero";
import ImageSlider from "./ImageSlider";
import ChatBot from "./ChatBoat";
import BookAppointment from "./BookAppointment";
import PackageSlider from "./PackageSlider";

const HomePage = () => {
  return (
    <>
      <VideoHero />
      <ImageSlider />
      <ChatBot />
      <BookAppointment />
      <PackageSlider />
    </>
  );
};

export default HomePage;
