import React, { useRef } from "react";
import video from "../../assets/college-video.mp4";
const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef();
  const closePlayer = (e) => {
    if(e.target === player.current) {
        setPlayState(false);
    }
  };
  return (
    <div
      className={`video-player fixed top-0 left-0n w-full h-full bg-[rgba(0,_0,_0,_0.9)] flex justify-center items-center z-50 ${
        playState ? "" : "hidden"
      }`}
      ref={player}
      onClick={closePlayer}
    >
      <video
        src={video}
        autoPlay
        muted
        controls
        className="w-[90%] max-w-[900px] h-auto border-4 border-[#fff]"
      ></video>
    </div>
  );
};

export default VideoPlayer;
