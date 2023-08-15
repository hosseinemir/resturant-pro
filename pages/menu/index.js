
import MenuPage from "@/components/template/MenuPage"
export default function index({data}) {
  return (
    <>
    <MenuPage  data={data}/>
    </>
  )
}


export async function getStaticProps(){

    const res = await fetch('https://resturant-api-seven.vercel.app/data');
    const data = await res.json();


    return{
      props:{data,},
      revalidate:1*60*60,
    }
  }