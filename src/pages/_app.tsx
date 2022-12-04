import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Sytled Components."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
