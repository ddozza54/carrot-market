import '@/styles/globals.css'
import Header from '@components/header';
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <Header />
      <Component {...pageProps} />
    </SWRConfig>)
}
