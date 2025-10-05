import React from "react";
import { Link } from "react-router-dom";
import sampleVideo from "../assets/sample-video.mp4"; // put your video file in src/assets

function VideoHero() {
  return (
    <section className="video-hero">
      {/* Background Video */}
      <video
        className="video-bg"
        src={sampleVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay content */}
      <div className="overlay">
        <h1 className="headline">Let food be a first medicine and kitchen be a first pharmacy</h1>
        <p className="subtext">Your transformation starts here </p>
       <Link to="/book-appointment" className="cta-btn">
          Book Your Consultation
        </Link>
      </div>
    </section>
  );
}

export default VideoHero;
