 // App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroImageSlider from './components/HeroImageSlider';
import PropertyInfo from './components/PropertyInfo';
import PropertyCard from './components/PropertyCard';
import AboutGoelGanga from './components/AboutGoelGanga';
function App() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[500px]">
      {/* Image Carousel */}
      <HeroImageSlider />

      {/* Optional dark overlay for better readability */}
      <div className="absolute inset-0 " />

      {/* Property Info Card Positioned */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <PropertyInfo />
      </div>
    </div>
    <AboutGoelGanga/>
      <PropertyCard/>
    </div>
  );
}

export default App;
