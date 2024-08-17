import { useSelector } from "react-redux";
import SectionProducts from "./SectionProducts";
import SectionTitle from "./SectionTitle";
import { useRef, useState } from "react";

let shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

const OurProducts = () => {
  const productsFromState = [...useSelector((state) => state.products)];
  shuffle(productsFromState);

  const selectedProducts = productsFromState.slice(0, 4);

  const remainingProducts = productsFromState.slice(4);

  const finalNormalProducts = useRef(selectedProducts);

  const [finalColoredProducts, setFinalColoredProducts] = useState(
    remainingProducts.slice(0, 4) // Take only 4 from the remaining products
  );

  return (
    <>
      <section className="container flex flex-col gap-8">
        <SectionTitle
          sectionName={"Our Products"}
          showArrows={true}
          showCounter={false}
          showBtn={false}
          sectionTitle={"Explore Our Products"}
        />
        <SectionProducts
          productsList={finalNormalProducts.current}
          cardWidth={false}
          showBtn={false}
          showDiscount={false}
          showPrevPrice={false}
          showHr={false}
          parentStyles={
            "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8"
          }
        />
        <SectionProducts
          setFinalProducts={setFinalColoredProducts}
          wholeProductsList={remainingProducts}
          productsList={finalColoredProducts}
          cardWidth={false}
          showBtn={true}
          showBtns={true}
          showDiscount={false}
          showPrevPrice={false}
          parentStyles={
            "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8"
          }
          showHr={false}
        />
      </section>
    </>
  );
};

export default OurProducts;
