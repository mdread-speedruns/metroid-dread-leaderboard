import { Global } from "@emotion/react";
import normalize from "normalize.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={normalize} />
      <div css={{ padding: "0 2rem" }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
