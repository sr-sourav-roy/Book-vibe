import Navber from "../../Componets/Header/Navber";
import Footer from "../../Componets/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
