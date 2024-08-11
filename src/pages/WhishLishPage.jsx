import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import SectionProducts from "../components/SectionProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/prodcutsSlice";

const WhishLishPage = () => {
  const dispatch = useDispatch();
  let anotherProductsList = [...useSelector((state) => state.products)];
  const productsList = useSelector((state) => state.whishList);

  for (let i = anotherProductsList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [anotherProductsList[i], anotherProductsList[j]] = [
      anotherProductsList[j],
      anotherProductsList[i],
    ];
  }

  anotherProductsList.length = 4;

  useEffect(() => {
    // dispatch(fetchProducts());
  }, []);
  return (
    <>
      <NavBar isLoggedIn={true} />
      <div className="container flex flex-col gap-8 pt-[100px]">
        <SectionTitle
          showSectionNameBtn={true}
          sectionNameBtn={"Move All To Bag"}
          showSectionNameBlock={false}
          sectionName={`Wishlist (${productsList.length})`}
          isInWhishList={true}
        />
        <SectionProducts
          productsList={productsList}
          cardWidth={true}
          parentStyles={"flex overflow-auto gap-8"}
          isInWhishList={true}
          showHr={false}
        />
        <SectionTitle
          sectionName={"Just For You"}
          showSectionNameBtn={true}
          sectionNameBtn={"See All"}
          isInWhishList={true}
        />
        <SectionProducts
          productsList={anotherProductsList}
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
