// src/components/VideoCard.jsx
import React from "react";

export default function VideoCard({ video }) {
  const { name, diagnosis, dischargedDate, videoUrl, package: pkg } = video;

  return (
    <div className="video-card">
      <video controls width="300">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-info">
        <p><strong>Patient:</strong> {name}</p>
        <p><strong>Diagnosis:</strong> {diagnosis}</p>
        <p><strong>Discharged:</strong> {new Date(dischargedDate).toLocaleDateString()}</p>
        {pkg && <p><strong>Package:</strong> {pkg}</p>}
      </div>
    </div>
  );
}
