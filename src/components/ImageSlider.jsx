import { useState, useEffect } from "react";
import doctor from "../assets/doctor.png";
import food from "../assets/food-plan.png";
import transformation from "../assets/transformation.png";
import beYourself from "../assets/be-yourself.png";

function ImageSlider() {
  const images = [
    { src: doctor, caption: "Personalized Consultation" },
    { src: food, caption: "Indian Food Plans" },
    { src: transformation, caption: "Transformation" },
    { src: beYourself, caption: "The Best Happiest version of yourself" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      <div className="slide">
        <div className="circle-frame">
          <img src={images[currentIndex].src} alt={images[currentIndex].caption} />
        </div>
        <p className="caption">{images[currentIndex].caption}</p>
      </div>
    </div>
  );
}

export default ImageSlider;




