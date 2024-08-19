import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ShowCategories from "./ShowCategories";

const Categories = () => {
  let [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      name: "Phones",
      icon: (
        <img
          className={` ${
            currentIndex == 0 ? "filter-white" : "group-hover:filter-white"
          } duration-300`}
          src="./imgs/Category-CellPhone.png"
        />
      ),
    },
    {
      name: "Computers",
      icon: (
        <img
          className={` ${
            currentIndex == 1 ? "filter-white" : "group-hover:filter-white"
          } duration-300`}
          src="./imgs/Category-Computer.png"
        />
      ),
    },
    {
      name: "SmartWatch",
      icon: (
        <img
          className={` ${
            currentIndex == 2 ? "filter-white" : "group-hover:filter-white"
          } duration-300`}
          src="./imgs/Category-SmartWatch.png"
        />
      ),
    },
    {
      name: "Camera",
      icon: (
        <img
          src="./imgs/Category-Camera.png"
          className={`brightness-0 ${
            currentIndex == 3 ? "brightness-100" : "group-hover:brightness-100"
          } duration-300`}
        />
      ),
    },
    {
      name: "HeadPhones",
      icon: (
        <img
          className={` ${
            currentIndex == 4 ? "filter-white" : "group-hover:filter-white"
          } duration-300`}
          src="./imgs/Category-Headphone.png"
        />
      ),
    },
    {
      name: "Gaming",
      icon: (
        <img
          className={` ${
            currentIndex == 5 ? "filter-white" : "group-hover:filter-white"
          } duration-300`}
          src="./imgs/Category-Gamepad.png"
        />
      ),
    },
  ];

  const handleRightArrow = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleLeftArrow = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(categories.length - 1);
    }
  };

  return (
    <>
      <section className="container flex flex-col gap-8">
        <SectionTitle
          handleRightArrow={handleRightArrow}
          handleLeftArrow={handleLeftArrow}
          sectionName={"Categories"}
          sectionTitle={"Browse By Category"}
          showArrows={true}
          showBtn={false}
          showCounter={false}
        />
        <ShowCategories currentIndex={currentIndex} categories={categories} />
        <hr className="border-border-color mt-[70px]" />
      </section>
    </>
  );
};

export default Categories;
