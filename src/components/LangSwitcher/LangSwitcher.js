import React, { useContext } from "react";
import { LOCALES } from "../../providers/i18n";
import { AppContext } from "../../providers/context";
import ReactCountryFlag from "react-country-flag";
import { FlagWrapper } from "./LangSwitcher.elements";

const LangSwitcher = () => {
  const { dispatch } = useContext(AppContext);
  const setLanguage = (siteLang) => dispatch({ type: "setLang", siteLang });
  return (
    <FlagWrapper>
      {Object.keys(LOCALES).map((locale) => {
        return (
          <ReactCountryFlag
            svg
            style={{
              width: "1.8em",
              height: "1.8em",
              margin: "0 2.5px 0 2.5px",
              cursor: "pointer",
            }}
            title={locale}
            countryCode={locale}
            key={locale}
            onClick={() => setLanguage(LOCALES[locale])}
          ></ReactCountryFlag>
        );
      })}
    </FlagWrapper>
  );
};

export default LangSwitcher;
