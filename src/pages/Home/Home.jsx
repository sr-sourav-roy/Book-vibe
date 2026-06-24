import { useLoaderData } from "react-router";
import Banner from "../../Componets/Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Books data={data}></Books>
    </div>
  );
};

export default Home;
// lg:mr-10 lg:mt-15 lg:mb-12  lg:mt-16 lg:mb-16 lg:ml-10
