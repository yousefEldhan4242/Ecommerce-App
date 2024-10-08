import { useSelector } from "react-redux";
import SectionProducts from "./SectionProducts";
import SectionTitle from "./SectionTitle";
import { useRef, useState } from "react";

let shuffle = (arr) => {
  let shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return [...shuffledArr];
};

const ThisMonth = () => {
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
      <section className="container flex flex-col gap-8">
        <SectionTitle
          handleViewAll={handleViewAll}
          sectionTitle={"Best Selling Products"}
          sectionName={"This Month"}
          showArrows={false}
          showBtn={true}
          showCounter={false}
        />
        <SectionProducts
          productsList={productsList}
          cardWidth={false}
          showBtn={false}
          showDiscount={false}
          showPrevPrice={true}
          parentStyles={
            "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8"
          }
        />
      </section>
    </>
  );
};

export default ThisMonth;
