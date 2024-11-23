import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WeatherPrediction from "./pages/WeatherPrediction";
import CropGuide from "./pages/CropGuide";
import RecentNews from "./pages/RecentNews";
import MarketPlace from "./pages/MarketPlace";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import TradingPage from "./pages/TradingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather-prediction" element={<WeatherPrediction />} />
        <Route path="/crop-guide" element={<CropGuide />} />
        <Route path="/recent-news" element={<RecentNews />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/tradepage" element={<TradingPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
