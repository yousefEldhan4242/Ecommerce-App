import { Link } from "react-router-dom";
import Services from "./Services";
import ShowCategories from "./ShowCategories";

const About = () => {
  const categories = [
    {
      title: "10.5k",
      name: "Sallers active our site",
      icon: (
        <img
          className="group-hover:filter-white duration-300"
          src="./imgs/Services (1).png"
        />
      ),
    },
    {
      title: "33k",
      name: "Mopnthly Produduct Sale",
      icon: (
        <img
          className="invert brightness-100 group-hover:invert-0 duration-300"
          src="./imgs/money1).png"
        />
      ),
    },
    {
      title: "45.5k",
      name: "Customer active in our site",
      icon: (
        <img
          className="group-hover:filter-white duration-300"
          src="./imgs/Salespng.png"
        />
      ),
    },
    {
      title: "25k",
      name: "Anual gross sale in our site",
      icon: (
        <img
          src="./imgs/Money.png"
          className="group-hover:filter-white duration-300"
        />
      ),
    },
  ];

  return (
    <>
      <section className="container">
        <ul className=" flex gap-2 mt-[100px]">
          <li className="text-[#878787] hover:text-lis-hover-color duration-300">
            <Link to="/">Home</Link>
          </li>
          <span className="text-[#878787]">/</span>
          <li>About</li>
        </ul>
      </section>
      <section className="flex container pb-[100px] h-[800px] items-center gap-10">
        <div className="flex flex-col gap-10 lg:w-[560px] lg:mr-[44vw] text-center lg:text-start text-balance">
          <h2 className="font-semibold text-[45px] tracking-[6px] pl-3">
            Our Story
          </h2>
          <p className="text-[19px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-[19px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img
          className="absolute h-[34vw] max-h-[600px] right-0 hidden lg:block"
          src="./imgs/pexels-mart-production-8801197.jpg"
          alt=""
        />
        <div className=" hidden lg:block"></div>
      </section>
      <section className="container flex flex-col gap-8 pb-[80px]">
        <ShowCategories categories={categories} />
        <section className="grid grid-cols-[repeat(auto-fill,minmax(265px,1fr))] gap-7 mt-[120px]">
          <article className="rounded m-auto flex flex-col gap-5">
            <div>
              <img src="./imgs/TomCruise.png" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[25px] tracking-wider">Tom Cruise</h4>
              <p>Founder & Chairman</p>
              <div className="flex gap-3">
                <img src="./imgs/Icon-Twitter.png" className="invert" alt="" />
                <img
                  src="./imgs/icon-instagram.png"
                  className="invert"
                  alt=""
                />
                <img src="./imgs/Icon-Linkedin.png" className="invert" alt="" />
              </div>
            </div>
          </article>
          <article className="rounded m-auto flex flex-col gap-5">
            <div>
              <img src="./imgs/WillSmithpng.png" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[25px] tracking-wider">Emma Watson</h4>
              <p>Managing Director</p>
              <div className="flex gap-3">
                <img src="./imgs/Icon-Twitter.png" className="invert" alt="" />
                <img
                  src="./imgs/icon-instagram.png"
                  className="invert"
                  alt=""
                />
                <img src="./imgs/Icon-Linkedin.png" className="invert" alt="" />
              </div>
            </div>
          </article>
          <article className="rounded m-auto flex flex-col gap-5">
            <div>
              <img src="./imgs/TomCruise.png" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[25px] tracking-wider">Will Smith</h4>
              <p>Product Designer</p>
              <div className="flex gap-3">
                <img src="./imgs/Icon-Twitter.png" className="invert" alt="" />
                <img
                  src="./imgs/icon-instagram.png"
                  className="invert"
                  alt=""
                />
                <img src="./imgs/Icon-Linkedin.png" className="invert" alt="" />
              </div>
            </div>
          </article>
        </section>
        <div className="m-auto mt-2">
          <img src="./imgs/Frame 883.png" alt="" />
        </div>
        <section className="mt-[150px]">
          <Services />
        </section>
      </section>
    </>
  );
};

export default About;
