// src/components/VideoCard.jsx
import React, { useRef, useEffect } from "react";

export default function VideoCard({ video, playingVideoId, setPlayingVideoId }) {
  const {id, name, diagnosis, dischargedDate, videoUrl, package: pkg } = video;
  const videoRef = useRef(null);


   useEffect(() => {
    if (!videoRef.current) return;

    if (playingVideoId === id) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // optional: reset to start
    }
  }, [playingVideoId, id]);

  const handlePlay = () => {
    setPlayingVideoId(id); // mark this video as playing
  };


  return (
    <div className="video-card">
      <video  ref={videoRef} controls width="300"  onPlay={handlePlay} >
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
