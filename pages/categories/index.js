import CategoriesPage from "@/components/template/CategoriesPage";

export default function Categories({ filtereddata }) {
  return (
    <>
      <CategoriesPage filtereddata={filtereddata} />
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { Difficulty, Time },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const filtereddata = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === Difficulty
    );
    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (Time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (Time === "more" && timeDetail && +timeDetail > 30) {
        return detail;
      }
    });
    if (Time && Difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!Time && Difficulty && difficultyResult.length) {
      return item;
    } else if (Time && !Difficulty && timeResult.length) {
      return item;
    } else if (!Time && !Difficulty) {
      return item;
    }
  });
  return {
    props: { filtereddata },
  };
}
