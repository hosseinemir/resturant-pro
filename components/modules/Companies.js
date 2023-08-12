import styles from "./Companies.module.css";
import Apple from "../icons/Apple";
import Tesla from "../icons/Tesla";
import Binance from "../icons/Binance";
import SpaceX from "../icons/SpaceX";

export default function Companies() {
  return (
    <div className={styles.main}>
      <div>
        <Apple />
      </div>
      <div>
        <Tesla />
      </div>
      <div>
        <Binance />
      </div>
      <div>
        <SpaceX />
      </div>
    </div>
  );
}
