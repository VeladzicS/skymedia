import React from "react";
import { YouTubeCont } from "./YouTubeShare.elements";
import YouTube from "react-youtube";

const YouTubeShare = () => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YouTubeCont>
      <YouTube videoId="QeOW2qtoVfs" opts={opts} />
    </YouTubeCont>
  );
};

export default YouTubeShare;
