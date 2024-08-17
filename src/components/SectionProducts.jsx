import { useRef } from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const SectionProducts = ({
  productsList,
  cardWidth,
  showBtn,
  parentStyles,
  showDiscount,
  showPrevPrice,
  showBtns,
  showHr = true,
  isInWhishList,
  showOnlyProductsWithSale,
  isInProductsPage,
  scrollRef,
  setParentStyles,
  setFinalProducts,
  wholeProductsList,
}) => {
  const viewAllBtnRef = useRef();
  const handleViewAll = () => {
    // change the content of btn passed on clicking
    if (viewAllBtnRef.current.textContent == "View All Products") {
      viewAllBtnRef.current.textContent = "View Less Products";
    } else {
      viewAllBtnRef.current.textContent = "View All Products";
    }

    // change the parent element styles if the "setParentStyles" function is present
    if (setParentStyles) {
      if (parentStyles == "flex overflow-auto gap-8") {
        setParentStyles(
          "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8"
        );
      } else {
        setParentStyles("flex overflow-auto gap-8");
      }
    }

    if (setFinalProducts) {
      if (productsList.length == 4) {
        setFinalProducts(wholeProductsList);
      } else {
        setFinalProducts(wholeProductsList.slice(0, 4));
      }
    }
  };

  return (
    <>
      <section className={`${parentStyles}`} ref={scrollRef}>
        {productsList &&
          productsList.map((item, index) => {
            return (
              <ProductCard
                isInProductsPage={isInProductsPage}
                showOnlyProductsWithSale={showOnlyProductsWithSale}
                cardWidth={cardWidth}
                key={index}
                product={item}
                showDiscount={showDiscount}
                showPrevPrice={showPrevPrice}
                showBtns={showBtns}
                isInWhishList={isInWhishList}
              />
            );
          })}
      </section>
      {showBtn && (
        <div className="flex items-center justify-center mt-10">
          <span
            ref={viewAllBtnRef}
            className="btn px-10 py-3 bg-main-color hover:bg-main-hover-bg duration-300 text-white rounded cursor-pointer"
            onClick={handleViewAll}
          >
            View All Products
          </span>
        </div>
      )}

      {showHr && <hr className="border-border-color mt-[60px]" />}
    </>
  );
};
SectionProducts.propTypes = {
  productsList: PropTypes.array,
  cardWidth: PropTypes.bool,
  showBtn: PropTypes.bool,
  parentStyles: PropTypes.string,
  showDiscount: PropTypes.bool,
  showPrevPrice: PropTypes.bool,
  showBtns: PropTypes.bool,
  showHr: PropTypes.bool,
  isInWhishList: PropTypes.bool,
  showOnlyProductsWithSale: PropTypes.bool,
  isInProductsPage: PropTypes.bool,
  scrollRef: PropTypes.object,
  setParentStyles: PropTypes.func,
  setFinalProducts: PropTypes.func,
  wholeProductsList: PropTypes.array,
};

export default SectionProducts;
