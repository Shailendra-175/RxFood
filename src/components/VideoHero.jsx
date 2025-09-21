import React from "react";
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
        <h1 className="headline">Let food be a medicine and kitchen be a pharmacy</h1>
        <p className="subtext">Your transformation starts here with Nutribites</p>
        <button className="cta-btn">Book Your Consultation</button>
      </div>
    </section>
  );
}

export default VideoHero;
