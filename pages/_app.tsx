import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className="mx-auto max-w-screen-lg px-4 pt-8 pb-16">
        <Component {...pageProps} />
      </div>
  );
}
