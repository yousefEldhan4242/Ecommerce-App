import { useSelector } from "react-redux";
import SectionProducts from "./SectionProducts";
import SectionTitle from "./SectionTitle";

const OurProducts = () => {
  let productsList = [...useSelector((state) => state.products)];
  let anotherProductsList = [...useSelector((state) => state.products)];

  for (let i = productsList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [productsList[i], productsList[j]] = [productsList[j], productsList[i]];
  }

  for (let i = anotherProductsList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [anotherProductsList[i], anotherProductsList[j]] = [
      anotherProductsList[j],
      anotherProductsList[i],
    ];
  }

  productsList.length = 4;
  anotherProductsList.length = 4;

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
          productsList={productsList}
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
          productsList={anotherProductsList}
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
