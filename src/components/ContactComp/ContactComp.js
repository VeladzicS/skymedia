import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { ContactContainer, LottieWrapper } from "./ContactComp.elements";
import { ContactForm } from "../index";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactComp = ({ img }) => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <ContactContainer data-aos="fade-up">
      <LottieWrapper>
        <Player
          autoplay
          loop
          src={img}
          style={{
            height: size > 960 ? "100%" : "50%",
            width: size > 960 ? "100%" : "50%",
            border: 0,
            verticalAlign: "middle",
            display: "inline-block",
            maxHeight: "650px",
            paddingRight: 0,
          }}
        />
      </LottieWrapper>
      <ContactForm />
    </ContactContainer>
  );
};

export default ContactComp;
