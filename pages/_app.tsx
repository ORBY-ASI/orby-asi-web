// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import BackgroundStarlight from "../components/BackgroundStarlight";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <BackgroundStarlight />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
