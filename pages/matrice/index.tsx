import type { NextPage } from "next";
import { IntlProvider } from "react-intl";
import { Header } from "../../src/components/Header";
import { MatrixTable } from "../../src/components/MatrixTable";
import { en } from "../../src/i18n/en";

const MatricePage: NextPage = () => {
  return (
    <IntlProvider messages={en} locale="en" defaultLocale="en">
      <Header />
      <MatrixTable />
    </IntlProvider>
  );
};

export default MatricePage;
