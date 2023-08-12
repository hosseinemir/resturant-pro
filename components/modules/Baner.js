import styles from "./Baner.module.css";
import Link from "next/link";
export default function Baner() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>tamin x food</h1>
        <p>Food Delivery and Takeout</p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          sapiente vitae quas corporis sit, aut et non. Tenetur perferendis
          culpa ut totam ab, iure debitis voluptate, molestias aliquid veniam
          nisi!
        </span>
        <button>
            <Link href={'/menu'}>
            see all</Link>
        </button>
      </div>
      <div className={styles.right}>
        <img src="/images/banner.png" alt="" />
      </div>
    </div>
  );
}
