import React from "react";
import { IntlProvider } from "react-intl";
import { Home } from "./components/Home";
import { en } from "./i18n/en";

export const App = () => {
  return (
    <IntlProvider messages={en} locale="he" defaultLocale="en">
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </IntlProvider>
  );
};
