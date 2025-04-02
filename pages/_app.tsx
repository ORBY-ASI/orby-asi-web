// pages/_app.tsx
import \"../styles/globals.css\"; // 전역 스타일 경로 (있다면 유지)
import type { AppProps } from \"next/app\";
import BackgroundStarlight from \"../components/BackgroundStarlight\";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundStarlight />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
