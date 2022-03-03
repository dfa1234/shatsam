import type { NextPage } from "next";
import { IntlProvider } from "react-intl";
import { Clock } from "../../src/components/Clock";
import { Header } from "../../src/components/Header";
import { en } from "../../src/i18n/en";

const ClockPage: NextPage = () => {
  return (
    <IntlProvider messages={en} locale="en" defaultLocale="en">
      <Header />
      <Clock />
    </IntlProvider>
  );
};

export default ClockPage;
