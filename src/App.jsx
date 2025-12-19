import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import PatientReviews from './components/PatientReviews';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from "./components/ResetPassword";
import PatientVideoReviews from './components/PatientVideoReviews';
import WhyUs from "./components/WhyUs";
import WeightLoss from "./components/WeightLoss";
import HealthPlans from "./components/HealthPlans";
import HealthShop from "./components/HealthShop";
import HealthyRecipes from "./components/HealthyRecipes";
import CartPage from "./components/CartPage";
import { CartProvider } from "./components/CartContext";
import BookAppointment from "./components/BookAppointment";
import ChatBoat from "./components/ChatBoat";
import CheckoutPage from "./components/CheckoutPage";
import PaymentPage from "./components/PaymentPage";
import OrderSuccess from "./components/OrderSuccess";



function App() {
  return (
    <CartProvider>
      <Router basename="/RxFood">
        <Routes>
          <Route path="/book-appointment" element={
            <Layout>
              <BookAppointment />
            </Layout>
          } />

          <Route path="/live-chat" element={
            <Layout>
              <ChatBoat />
            </Layout>
          } />
          {/* Home Page */}
          <Route path="/" element={
            <Layout>
              <HomePage />
            </Layout>
          } />

          {/* Patient Reviews Page */}
          <Route path="/reviews" element={
            <Layout>
              <PatientReviews />
            </Layout>
          } />
          <Route path="/video-reviews" element={
            <Layout>
              <PatientVideoReviews />
            </Layout>
          } />


          {/* SignUp Page */}
          <Route path="/signup" element={
            <Layout><SignUp /> </Layout>} />
          <Route path="/login" element={
            <Layout>
              <Login />
            </Layout>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />}
          />
          <Route path="/patient-stories" element={
            <Layout>
              <PatientVideoReviews />
            </Layout>
          } />
          <Route path="/why-us" element={
            <Layout><WhyUs /> </Layout>} />
          <Route path="/weight-loss" element=
            {<Layout><WeightLoss /> </Layout>} />
          <Route path="/health-plans" element={
            <Layout> <HealthPlans /></Layout>} />
          <Route path="/health-shop" element={
            <Layout> <HealthShop /> </Layout>} />
          <Route path="/cart" element={<Layout><CartPage /></Layout>} />
          <Route path="/health-recipes" element={
            <Layout><HealthyRecipes /> </Layout>} />

          <Route path="/checkout" element={
            <Layout>
              <CheckoutPage />
            </Layout>
          } />
          <Route path="/payment" element={
            <Layout>
              <PaymentPage />
            </Layout>
          } />
          <Route path="/order-success" element={
            <Layout>
              <OrderSuccess />
            </Layout>
          } />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
