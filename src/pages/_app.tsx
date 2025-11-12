import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from "next-i18next";
import Head from 'next/head';

import nextI18NextConfig from "../../next-i18next.config"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RWA OLIVE OIL</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"></meta>
        <meta name="keywords" content="rwa olive oil"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default appWithTranslation(App, nextI18NextConfig)
