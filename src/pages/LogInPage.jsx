import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import SignUpAndLogIn from "../components/SignUpAndLogIn";

const LogInPage = () => {
  return (
    <>
      <Navbar isInSignUpOrLogIn={true} isLoggedIn={true} />
      <SignUpAndLogIn isInLogIn={true} />
      <Footer />
    </>
  );
};

export default LogInPage;
