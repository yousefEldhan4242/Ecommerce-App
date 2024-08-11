import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import SignUpAndLogIn from "../components/SignUpAndLogIn";

const SignUpAndLogInPage = () => {
  return (
    <>
      <Navbar isInSignUpOrLogIn={true} isLoggedIn={true} />
      <SignUpAndLogIn isInLogIn={false} />
      <Footer />
    </>
  );
};

export default SignUpAndLogInPage;
