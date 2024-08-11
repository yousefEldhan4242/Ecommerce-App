import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpAndLogInPage";
import WhishLishPage from "./pages/WhishLishPage";
import AccountPage from "./pages/AccountPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import ProductDetasilsPage from "./pages/ProductDetailsPage";
import { Routes, Route } from "react-router";
import LogInPage from "./pages/LogInPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./rtk/slices/prodcutsSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signUp" element={<SignUpPage />} />
        <Route path="logIn" element={<LogInPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="whishList" element={<WhishLishPage />} />
        <Route path="checkOut" element={<CheckOutPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="product/:productId" element={<ProductDetasilsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
