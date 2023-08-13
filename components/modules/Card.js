import Link from "next/link";
import styles from "./Card.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

export default function Card(props) {
  const { id, name, price, discount, details } = props;
  return (
    <div>
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div className={styles.name}>
        <p>{name}</p>
        <div className={styles.location}>
          <Location />
          <p>{details[0].Cuisine}</p>
        </div>
      </div>
      <div className={styles.price}>
        <Dollar />
        {discount ? (
          <p className={styles.discount}>{(price * (100 - discount)) / 100}$</p>
        ) : (
          <p>{price}</p>
        )}
      </div>
      {discount ? <div className={styles.badge}>{discount} %</div> : null}
      <Link href={`/menu/${id}`}>see details</Link>
    </div>
  );
}
