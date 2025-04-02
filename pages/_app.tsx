import "../styles/globals.css";
import type { AppProps } from "next/app";
import BackgroundStarlight from "../components/BackgroundStarlight";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundStarlight />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
