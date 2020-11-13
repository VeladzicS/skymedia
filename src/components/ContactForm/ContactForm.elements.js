import styled from "styled-components";

import { ThemeColors } from "../../theme";

const { blue, oldBlue, blueHover } = ThemeColors;

export const ContactInput = styled.input`
  height: 35px;
  border: 2px solid ${oldBlue};
  padding-left: 5px;
  margin-bottom: 25px;
  transition: 0.3s;
  width: 400px;
  font-size: 1.8rem;

  &::placeholder {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &:focus {
    border: 2px solid ${blue};
    color: ${blue};
  }

  @media screen and (max-width: 865px) {
    width: 100%;
  }
`;
export const ContactInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ContactErrorContainer = styled.div`
  position: relative;

  width: 400px;
  @media screen and (max-width: 865px) {
    width: 100%;
  }
`;

export const ContactErrorContainerTextarea = styled.div`
  position: relative;
  width: 100%;
`;

export const ContactTextArea = styled.textarea`
  height: 150px;
  width: 100%;
  border: 2px solid ${oldBlue};
  resize: none;
  padding-left: 5px;
  padding-top: 10px;
  margin-bottom: 10px;

  &:focus {
    border: 2px solid ${blue};
    color: ${blue};
  }
`;
export const ContactFormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 850px;
  margin: 10rem auto;
`;
export const ContactFormButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? blue : "#1f2839")};
  white-space: nowrap;
  padding: ${({ buttonBig }) => (buttonBig ? "14px 24px" : "10px 20px")};
  color: #fff;
  font-size: ${({ buttonFontBig }) => (buttonFontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    background: ${({ primary }) => (primary ? blueHover : blueHover)};
    transform: scale(1.01);
  }
`;

export const FormLabel = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
`;
