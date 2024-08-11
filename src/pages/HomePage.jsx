import Sections from "../components/Navigator";
import FlashSales from "../components/FlashSales";
import Navbar from "../components/NavBar";
import ThisMonth from "../components/ThisMonth";
import Categories from "../components/Categories";
import OurProducts from "../components/OurProducts";
import Featured from "../components/Featured";
import Image from "../components/Image";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ScrollIcon from "../components/ScrollIcon";

const HomePage = () => {
  return (
    <>
      <ScrollIcon />
      <Navbar isLoggedIn={true} />
      <Sections />
      <FlashSales />
      <Categories />
      <ThisMonth />
      <Image />
      <OurProducts />
      <Featured />
      <Services />
      <Footer />
    </>
  );
};

export default HomePage;
