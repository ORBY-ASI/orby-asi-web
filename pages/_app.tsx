// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import BackgroundStarlight from "../components/BackgroundStarlight";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundStarlight />
      <Component {...pageProps} />
      <Navigation />
      <Footer />
    </>
  );
}

export default MyApp;
