import { useSelector } from "react-redux";
import SectionProducts from "./SectionProducts";
import SectionTitle from "./SectionTitle";

const ThisMonth = () => {
  const productsList = [...useSelector((state) => state.products)];

  for (let i = productsList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [productsList[i], productsList[j]] = [productsList[j], productsList[i]];
  }

  productsList.length = 4;

  return (
    <>
      <section className="container flex flex-col gap-8">
        <SectionTitle
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
