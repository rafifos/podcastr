import "modern-normalize";
import Head from "next/head";
import Header from "components/Header";
import Player from "components/Player";

import styles from "styles/pages/app.module.scss";

function App({ Component, pageProps }) {
  return (
    <div className={styles.App}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>

      <Player />
    </div>
  );
}

export default App;
