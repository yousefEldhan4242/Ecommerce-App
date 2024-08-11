import { useDispatch, useSelector } from "react-redux";
import SectionProducts from "./SectionProducts";
import SectionTitle from "./SectionTitle";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/prodcutsSlice";

const OurProducts = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    // dispatch(fetchProducts());
  }, []);

  // const products = [
  //   {
  //     id: 1,
  //     title: "Kids Electric Car",
  //     currentPrice: "960",
  //     rating: 4.5,
  //     availableItems: "65",
  //     new: true,
  //     image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  //     color: "#f91313",
  //   },
  //   {
  //     id: 2,
  //     title: "Jr. Zoom Soccer Cleats",
  //     currentPrice: "1160",
  //     rating: 4.5,
  //     availableItems: "35",
  //     new: false,
  //     image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  //     color: "#eeff61",
  //   },
  //   {
  //     id: 3,
  //     title: "GP11 Shooter USB Gamepad",
  //     currentPrice: "660",
  //     rating: 4.5,
  //     availableItems: "55",
  //     new: true,
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     color: "black",
  //   },
  //   {
  //     id: 4,
  //     title: "Quilted Satin Jacket",
  //     currentPrice: "660",
  //     rating: 4.5,
  //     availableItems: "55",
  //     new: false,
  //     image:
  //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     color: "#184a47",
  //   },
  // ];

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
