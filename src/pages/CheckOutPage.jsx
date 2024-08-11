import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Form from "../components/CheckOut";

const CheckOutPage = () => {
  return (
    <div>
      <Navbar isLoggedIn={true} />
      <Form />
      <Footer />
    </div>
  );
};

export default CheckOutPage;
