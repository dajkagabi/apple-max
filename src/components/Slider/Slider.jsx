import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/Hero-1.jpg";
import img2 from "../../assets/Hero-2.jpg";
import img3 from "../../assets/Hero-3.jpg";
import img4 from "../../assets/Hero-4.jpg";
import img5 from "../../assets/Hero-5.jpg";

const slides = [img1, img2, img3, img4, img5];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Automatikus váltás 5 másodpercenként
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative w-full flex justify-center py-12 bg-white">
      <div className="relative w-[90%] md:w-[80%] h-[80vh] rounded-3xl overflow-hidden shadow-xl">
       

        
        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

       
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
