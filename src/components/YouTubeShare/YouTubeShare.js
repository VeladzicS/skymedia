import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { AltButton } from "../../globalStyles";
import translate from "../../providers/i18n/translate";

const YouTubeShare = ({ primary, noShowReel }) => {
  const [isOpen, setOpen] = useState(false);
  let buttonStyle = {
    marginLeft: "20px",
  };
  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="sJyyzwHO4u4"
        onClose={() => setOpen(false)}
      />

      <AltButton
        primary={primary}
        noShowReel={noShowReel}
        style={buttonStyle}
        onClick={() => setOpen(true)}
      >
        {translate("aboutPage.ctaButton")}
      </AltButton>
    </React.Fragment>
  );
};

export default YouTubeShare;
