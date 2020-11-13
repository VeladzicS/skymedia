import React from "react";
import { Link } from "react-router-dom";
import { Button, Underline } from "../../globalStyles";
import { Wrapper, ErrorImgWrapp, ErrorMsgWrapp } from "./NotFoundComp.elements";
import translate from "../../providers/i18n/translate";

const NotFoundComp = ({
  img,
  goldUnderline,
  pageTitle,
  buttonFontBig,
  buttonBig,
}) => {
  return (
    <Wrapper>
      <ErrorMsgWrapp>
        <h4> {translate(pageTitle)}</h4>
        <Underline goldUnderline={goldUnderline} />
        <h2>Hasta La Vista Baby</h2>
        <Link to="/">
          <Button buttonBig={buttonBig} buttonFontBig={buttonFontBig}>
            {translate("errorPage.button")}
          </Button>
        </Link>
      </ErrorMsgWrapp>
      <ErrorImgWrapp>
        <img src={img} alt="Hasta La Vista Baby" />
      </ErrorImgWrapp>
    </Wrapper>
  );
};

export default NotFoundComp;
