import SectionProducts from "./SectionProducts";
import SectionTitle from "./SectionTitle";
import { useSelector } from "react-redux";

const FlashSales = () => {
  const productsList = useSelector((state) => state.products);
  const products = [...productsList];

  for (let i = products.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }

  return (
    <>
      <section className="container flex flex-col gap-8">
        <SectionTitle
          sectionName={"Today's"}
          sectionTitle="Flash Sales"
          showArrows={true}
          showBtn={false}
          showCounter={true}
        />

        <SectionProducts
          showOnlyProductsWithSale={true}
          productsList={products}
          cardWidth={true}
          showBtn={true}
          showPrevPrice={true}
          parentStyles={"flex overflow-auto gap-8"}
          showDiscount={true}
        />
      </section>
    </>
  );
};

export default FlashSales;
