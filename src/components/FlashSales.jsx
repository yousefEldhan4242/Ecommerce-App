import SectionProducts from "./SectionProducts";
import SectionTitle from "./SectionTitle";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";

const FlashSales = () => {
  const productsList = useSelector((state) => state.products);
  const products = [...productsList];

  // shuffle the products
  for (let i = products.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -275, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 275, behavior: "smooth" });
  };

  let [parentStyles, setParentStyles] = useState("flex overflow-auto gap-8");

  return (
    <>
      <section className="container flex flex-col gap-8">
        <SectionTitle
          sectionName={"Today's"}
          sectionTitle="Flash Sales"
          showArrows={true}
          showBtn={false}
          isInFlashSales={true}
          showCounter={true}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
        />

        <SectionProducts
          scrollRef={scrollRef}
          showOnlyProductsWithSale={true}
          productsList={products}
          cardWidth={true}
          showBtn={true}
          setParentStyles={setParentStyles}
          showPrevPrice={true}
          parentStyles={parentStyles}
          showDiscount={true}
        />
      </section>
    </>
  );
};

export default FlashSales;
