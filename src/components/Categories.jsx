import SectionTitle from "./SectionTitle";
import ShowCategories from "./ShowCategories";

const Categories = () => {
  const categories = [
    {
      name: "Phones",
      icon: (
        <img
          className="group-hover:filter-white duration-300"
          src="./imgs/Category-CellPhone.png"
        />
      ),
    },
    {
      name: "Computers",
      icon: (
        <img
          className="group-hover:filter-white duration-300"
          src="./imgs/Category-Computer.png"
        />
      ),
    },
    {
      name: "SmartWatch",
      icon: (
        <img
          className="group-hover:filter-white duration-300"
          src="./imgs/Category-SmartWatch.png"
        />
      ),
    },
    {
      name: "Camera",
      icon: (
        <img
          src="./imgs/Category-Camera.png"
          className="brightness-0 group-hover:brightness-100 duration-300"
        />
      ),
    },
    {
      name: "HeadPhones",
      icon: (
        <img
          className="group-hover:filter-white duration-300"
          src="./imgs/Category-Headphone.png"
        />
      ),
    },
    {
      name: "Gaming",
      icon: (
        <img
          className="group-hover:filter-white duration-300"
          src="./imgs/Category-Gamepad.png"
        />
      ),
    },
  ];

  return (
    <>
      <section className="container flex flex-col gap-8">
        <SectionTitle
          sectionName={"Categories"}
          sectionTitle={"Browse By Category"}
          showArrows={true}
          showBtn={false}
          showCounter={false}
        />
        <ShowCategories categories={categories} />
        <hr className="border-border-color mt-[70px]" />
      </section>
    </>
  );
};

export default Categories;
