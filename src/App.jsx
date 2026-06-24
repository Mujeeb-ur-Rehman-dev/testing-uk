import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryCarousel from "./components/CategoryCarousel";
import ImpactStats from "./components/ImpactStats";
import VideoSection from "./components/VideoSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";
import WhyGiveZakat from './components/WhyGiveZakat';
import zakatImage from '../src/assets/imgi_26_Group-5766-300x267.png'
import ZakatImpact from "./components/ZakatImpact";
import ZakatCalculator from "./components/ZakatCalculator";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <WhyGiveZakat image={zakatImage}/>
      <CategoryCarousel />
      <ImpactStats />
      <VideoSection />
      <ZakatImpact/>
      <Newsletter />
      <ZakatCalculator/>
      <Footer />
    </div>
  );
}
