import Head from "next/head";

import { Global } from "@emotion/react";
import normalize from "normalize.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Metroid Dread Leaderboard</title>
        <meta name="description" content="This is a simple leaderboard for Metroid Dread." />
      </Head>
      <Global styles={normalize} />
      <div css={{ padding: "0 2rem" }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
