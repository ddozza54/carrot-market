import '@/styles/globals.css'
import Header from '@components/header';
import type { AppProps } from 'next/app'
import { Fragment } from 'react';
import { SWRConfig } from 'swr';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full h-screen flex justify-center bg-zinc-200'>
      <div className='md: w-[600px] h-full bg-white relative '>
        <SWRConfig
          value={{
            fetcher: (url: string) =>
              fetch(url).then((response) => response.json()),
          }}
        >
          <Header />
          <Component {...pageProps} />
        </SWRConfig>
      </div>
    </div>
  )
}
