import type { NextPage } from "next";
import { IntlProvider } from "react-intl";
import { Header } from "../../src/components/Header";
import { SunClock } from "../../src/components/SunClock";
import { en } from "../../src/i18n/en";

const SunClockPage: NextPage = () => {
  return (
    <IntlProvider messages={en} locale="en" defaultLocale="en">
      <Header />
      <SunClock />
    </IntlProvider>
  );
};

export default SunClockPage;
