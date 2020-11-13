import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { PulseLoader } from "react-spinners";
import translate from "../../providers/i18n/translate";

import { ErrorMessage } from "../../globalStyles";
import {
  ContactInput,
  ContactFormElement,
  ContactTextArea,
  ContactInputContainer,
  ContactFormButton,
  ContactErrorContainer,
  ContactErrorContainerTextarea,
  FormLabel,
} from "./ContactForm.elements";

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    setIsLoading(true);
    emailjs
      .sendForm(
        "gmail",
        "template_18kdw4l",
        e.target,
        "user_2UwkLimoAZs8JO5fjzV3U"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          Swal.fire("Thank you for Contacting Sky Media");
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          Swal.fire({
            icon: "error",
            title: translate("Ooops... Message not sent."),
          });
        }
      );
    e.target.reset();
  }

  const onSubmit = (data, e) => {
    sendEmail(e);
  };

  return (
    <>
      <ContactFormElement
        method="post"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <ContactInputContainer>
          <ContactErrorContainer>
            <FormLabel htmlFor="name">
              {translate("contactPage.namePlace")}
            </FormLabel>
            <ContactInput
              id="name"
              name="name"
              ref={register({ required: true, minLength: 3, maxLength: 25 })}
            />
            {errors.name && (
              <ErrorMessage>{translate("contactPage.nameError")}</ErrorMessage>
            )}
          </ContactErrorContainer>
          <ContactErrorContainer>
            <FormLabel htmlFor="email">
              {translate("contactPage.emailPlace")}
            </FormLabel>
            <ContactInput
              id="email"
              name="email"
              ref={register({
                required: true,
                minLength: 3,
                maxLength: 25,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            {errors.email?.type === "pattern" && (
              <ErrorMessage>
                {translate("contactPage.emailErrorTwo")}
              </ErrorMessage>
            )}
            {errors.email?.type === "required" && (
              <ErrorMessage>{translate("contactPage.emailError")}</ErrorMessage>
            )}
          </ContactErrorContainer>
        </ContactInputContainer>
        <ContactErrorContainerTextarea>
          <FormLabel htmlFor="message">
            {translate("contactPage.porukaPlace")}
          </FormLabel>
          <ContactTextArea
            type="text"
            name="message"
            ref={register({ required: true, minLength: 3, maxLength: 160 })}
          ></ContactTextArea>
          {errors.email && (
            <ErrorMessage>{translate("contactPage.porukaError")}</ErrorMessage>
          )}
        </ContactErrorContainerTextarea>
        <ReCAPTCHA sitekey="6LfDatgZAAAAANWAHrcTfjjVfF_YYJ64LSYgj6aO" />

        <ContactFormButton type="submit">
          {isLoading ? (
            <PulseLoader color="white" size={10} />
          ) : (
            translate("contactPage.button")
          )}
        </ContactFormButton>
      </ContactFormElement>
    </>
  );
};

export default ContactForm;
