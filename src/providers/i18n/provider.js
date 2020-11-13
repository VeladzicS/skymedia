import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./locales";
import messages from "./messages";
import { flattenMessages } from "./messages/utils";
const Provider = ({ children, locale = LOCALES.US }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={flattenMessages(messages[locale])}
  >
    {children}
  </IntlProvider>
);

export default Provider;
