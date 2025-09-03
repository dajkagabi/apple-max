import React, { useState } from 'react';

import dirtyblueImage from '../../assets/dirtyblue.jpg';
import nightblackImage from '../../assets/nightblack.jpg';
import orangeImage from '../../assets/orange.jpg';
import purpleImage from '../../assets/purple.jpg';
import starlightImage from '../../assets/starlight.jpg';

//Színek szerint társítás
const colors = [
  { name: 'nightblack', hex: '#4B4B4D', image: nightblackImage },
  { name: 'starlight', hex: '#E0E0C8', image: starlightImage },
  { name: 'orange', hex: '#E7B599', image: orangeImage },
  { name: 'dirtyblue', hex: '#A9BBC5', image: dirtyblueImage },
  { name: 'purple', hex: '#C2B8D8', image: purpleImage },
];

function DesignSection() {

  const [selectedColor, setSelectedColor] = useState(colors[0]); 

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
        
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Művészien megalkotva. Meglepően könnyű, mégis erőteljes.</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">Válaszd ki a stílusod. Az ikonikus formát több kifinomult színben élvezheted.</p>
            
            {/* Színválasztó körök */}
            <div className="flex space-x-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor.name === color.name ? 'border-blue-500' : 'border-transparent'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Válassza a ${color.name} színt`}
                ></button>
              ))}
            </div>
          </div>

          {/* A körökhöz tartozó kép */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={selectedColor.image}
              alt={`AirPods Max - ${selectedColor.name}`}
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignSection;