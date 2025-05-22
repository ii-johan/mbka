// mbka/src/pages/_app.tsx
import '../styles/globals.css'; // 전역 스타일 임포트
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;