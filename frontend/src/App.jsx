import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WeatherPrediction from "./pages/WeatherPrediction";
import CropGuide from "./pages/CropGuide";
import RecentNews from "./pages/RecentNews";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import TradingPage from "./pages/TradingPage";
import Footer from "./components/Footer";
import ExpertSupport from "./additional pages/ExpertSupport";
import DetailedForecast from "./additional pages/DetailedForecast";
import ContactExperts from "./additional pages/ContactExperts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather-prediction" element={<WeatherPrediction />} />
        <Route path="/crop-guide" element={<CropGuide />} />
        <Route path="/recent-news" element={<RecentNews />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tradepage" element={<TradingPage/>}/>
        <Route path="/expert-support" element={<ExpertSupport/>}/>
        <Route path="/detailed-forecast" element={<DetailedForecast/>}/>
        <Route path="/contact-experts" element={<ContactExperts/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
