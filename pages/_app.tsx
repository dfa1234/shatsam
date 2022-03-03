import type { AppProps } from "next/app";
import "../styles/balloon.min.css";
import "../styles/globals.css";
import "../styles/water.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
