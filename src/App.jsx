import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryCarousel from "./components/CategoryCarousel";
import ImpactStats from "./components/ImpactStats";
import VideoSection from "./components/VideoSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <CategoryCarousel />
      <ImpactStats />
      <VideoSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
