import { useEffect, useState } from "react";
import styles from "./CategoriesPage.module.css";
import { useRouter } from "next/router";
import Card from "../modules/Card";
export default function CategoriesPage({ filtereddata }) {
  const route = useRouter();
  const [query, setQuery] = useState({ Difficulty: "", Time: "" });
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  const searchHandler = () => {
    route.push({
      pathname: "/categories",
      query,
    });
  };
  useEffect(()=>{
    const {Difficulty,Time}=route.query;
    if(query.Difficulty!==Difficulty||query.Time!==Time){
      setQuery({Difficulty,Time})
    }
  },[])
  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subcon}>
        <div className={styles.select}>
          <select
            value={query.Difficulty}
            name="Difficulty"
            id=""
            onChange={changeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.Time} name="Time" id="" onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className={styles.cardcontainer}>
          {filtereddata.map((item) =>  (<Card key={item.id} {...item} />)
          )}
        </div>
      </div>
    </div>
  );
}
