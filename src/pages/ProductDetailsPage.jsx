import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ProductDetails from "../components/ProductDetails";
import PropTypes from "prop-types";
import SectionTitle from "../components/SectionTitle";
import SectionProducts from "../components/SectionProducts";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  let productsList = [...useSelector((state) => state.products)];
  let anotherProductsList = useSelector((state) => state.products);

  for (let i = productsList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [productsList[i], productsList[j]] = [productsList[j], productsList[i]];
  }

  productsList.length = 4;

  return (
    <>
      <Navbar />

      {anotherProductsList && (
        <ProductDetails productsList={anotherProductsList} />
      )}
      <section className="container">
        <SectionTitle sectionName={"Related Item"} />

        {productsList && (
          <SectionProducts
            isInProductsPage={true}
            productsList={productsList}
            cardWidth={true}
            showBtn={true}
            showPrevPrice={true}
            parentStyles={
              "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mt-[40px]"
            }
            showDiscount={true}
          />
        )}
      </section>
      <Footer isInProductsPage={true} />
    </>
  );
};

ProductDetailsPage.propTypes = {
  product: PropTypes.object,
};

export default ProductDetailsPage;
