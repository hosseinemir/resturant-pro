import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.nextmain}>
      <div className={styles.maincontainer}>
        <header className={styles.header}>
          <div className={styles.left}>
            <Link href={"/"}>
              <h1>taminx resturant</h1>
            </Link>
          </div>
          <div className={styles.right}>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/categories"}>Categories</Link>
          </div>
        </header>
        <div className={styles.container}>{children}</div>
        <footer className={styles.footer}>tamin x team &copy;</footer>
      </div>
    </div>
  );
}
