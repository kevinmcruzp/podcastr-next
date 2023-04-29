import { Header } from "../components/Header";
import { Player } from "../components/Player";

import "../styles/global.scss";

import { PlayerProvider } from "../context/PlayerContext";
import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <div className={styles.appWrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerProvider>
  );
}

export default MyApp;
