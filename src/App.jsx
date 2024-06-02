import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
// Routes
import Offers from "./routes/offers/Offers";
import AllMeals from "./routes/meals/AllMeals";
import Order from "./routes/orders/Orders";
import OldOrders from "./routes/orders/OldOrders";
import Navbar from "./navbar/Navbar";
import Homepage from "./home-page/Homepage";
import Cart from "./routes/cart/Cart";
import AboutUsLink from "./routes/extras/AboutUsLink";
import TermsOfUse from "./routes/extras/TermsOfUse";
import Advertise from "./routes/extras/Advertise";
import OurServices from "./routes/extras/OurServices";
import PrivacyPolicy from "./routes/extras/PrivacyPolicy";
import Security from "./routes/extras/Security";
import PaymentOptions from "./routes/extras/PaymentOptions";
import AdsInfo from "./routes/extras/AdsInfo";
import SpecificMeal from "./routes/meals/SpecificMeal";
import Payment from "./routes/payments/Payment";
import { ToastContainer } from "react-toastify";
import Signin from "./auth/Signin";
import SignUp from "./auth/SignUp";
import ForgotPassword from "./auth/ForgotPassword";
import EmailVerify from "./auth/email/EmailVerify";
import ResetPassword from "./auth/email/ResetPassword";
import GiveFeedback from "./home-page/reviews/GiveFeedback";
import axios from "axios";

function App() {
  const JWT_TOKEN = localStorage.getItem("token");
  const isTokenExpired = async () => {
    if (JWT_TOKEN) {
      try {
        const url = import.meta.env.VITE_API_URL;
        const apiUrl = `${url}/checkTokenExpiration`;
        const { data: res } = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${JWT_TOKEN}`,
          },
        });
        if (res.expired) {
          localStorage.removeItem("token");
          window.location = "/login";
          return;
        }
      } catch (err) {
        // Handle error
        console.error("Error checking token expiration:", err);
        localStorage.removeItem("token");
        window.location = "/login";
        return;
      }
    }
  };

  useEffect(() => {
    isTokenExpired();
  }, []);

  return (
    <>
      <ToastContainer />
      <Router>
        {JWT_TOKEN && <Navbar />}
        <Wrapper>
          <Routes>
            {JWT_TOKEN ? (
              <>
                <Route path="/" element={<Homepage />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/allmeals/:category" element={<AllMeals />} />
                <Route path="/allmeals" element={<AllMeals />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/aboutus" element={<AboutUsLink />} />
                <Route path="/termsofuse" element={<TermsOfUse />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route path="/ourservices" element={<OurServices />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/security" element={<Security />} />
                <Route path="/paymentoptions" element={<PaymentOptions />} />
                <Route path="/adsinfo" element={<AdsInfo />} />
                <Route path="/orders" element={<Order />} />
                <Route path="/orders/old-orders" element={<OldOrders />} />
                <Route path="/give-feedback" element={<GiveFeedback />} />
                <Route path="/update-feedback/:id" element={<GiveFeedback />} />
                <Route
                  path="/specific-meal/:mealId"
                  element={<SpecificMeal />}
                />
                <Route path="/payment" element={<Payment />} />
              </>
            ) : (
              <>
                <Route path="/login" exact element={<Signin />} />
                {/* Use the Navigate component to redirect to the login page */}
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/signup" exact element={<SignUp />} />
                <Route
                  path="/users/:id/verify/:token"
                  element={<EmailVerify />}
                />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                  path="/users/:id/reset-password/:token"
                  element={<ResetPassword />}
                />
              </>
            )}
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
