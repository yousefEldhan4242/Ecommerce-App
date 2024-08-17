import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import SectionProducts from "../components/SectionProducts";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";

let shuffle = (arr) => {
  let shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return [...shuffledArr];
};

const WhishLishPage = () => {
  const whishListProducts = useSelector((state) => state.whishList);
  const products = [...useSelector((state) => state.products)];
  let shuffleProducts = useRef(shuffle(products));

  let [productsList, setProductsList] = useState(
    shuffleProducts.current.slice(0, 4)
  );

  const handleViewAll = () => {
    if (productsList.length == 4) {
      setProductsList(shuffleProducts.current);
    } else {
      setProductsList(shuffleProducts.current.slice(0, 4));
    }
  };

  return (
    <>
      <NavBar isLoggedIn={true} />
      <div className="container flex flex-col gap-8 pt-[100px]">
        <SectionTitle
          showSectionNameBtn={true}
          sectionNameBtn={"Move All To Bag"}
          showSectionNameBlock={false}
          sectionName={`Wishlist (${whishListProducts.length})`}
          isInWhishList={true}
        />
        <SectionProducts
          productsList={whishListProducts}
          cardWidth={true}
          parentStyles={"flex overflow-auto gap-8"}
          isInWhishList={true}
          showHr={false}
        />
        <SectionTitle
          sectionName={"Just For You"}
          showSectionNameBtn={true}
          handleViewAll={handleViewAll}
          sectionNameBtn={"See All"}
          isInWhishList={true}
        />
        <SectionProducts
          productsList={productsList}
          cardWidth={true}
          parentStyles={
            "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8"
          }
          isInWhishList={true}
        />
      </div>
      <Footer />
    </>
  );
};

export default WhishLishPage;
