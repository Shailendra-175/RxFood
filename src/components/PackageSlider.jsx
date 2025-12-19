import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import packages from "../data/packages";

export default function PackageSlider() {
  return (
    <div className="package-slider">
      <h2>Our Packages</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 3000, // ✅ 3 seconds per slide
          disableOnInteraction: false, // Keep autoplay after user interaction
        }}
      >
        {packages.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <div className="package-card">
              {/* ✅ Add image rendering */}
              <img
                src={`${import.meta.env.BASE_URL}packages/${pkg.image}`}
                alt={pkg.title}
                className="packages-image"
                             />

              <h3 className="package-title">{pkg.title}</h3>

              <ul>
                {pkg.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p className="package-bestfor">
                <strong>Best For:</strong> {pkg.bestFor}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

