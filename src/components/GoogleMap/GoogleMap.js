import React from "react";

import { IframeDiv } from "./GoogleMapElements";

const GoogleMap = () => {
  return (
    <IframeDiv>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1415.0762686842995!2d15.860962628480511!3d44.81845701090509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shr!2sba!4v1602951399681!5m2!1shr!2sba"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </IframeDiv>
  );
};

export default GoogleMap;
