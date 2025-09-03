import React from "react";
import { Volume2, Waves, BatteryCharging, Cpu, Package } from "lucide-react"; 
import product from "../../assets/starlight.jpg"; 

const features = [
  {
    icon: <Volume2 className="w-6 h-6 text-blue-600" />,
    text: "Magával ragadó térhangzás.",
  },
  {
    icon: <Waves className="w-6 h-6 text-blue-600" />,
    text: "Aktív zajszűrés és áttetszőség mód.",
  },
  {
    icon: <BatteryCharging className="w-6 h-6 text-blue-600" />,
    text: "Akár 20 óra üzemidő.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-600" />,
    text: "H1 chip, intelligens technológia.",
  },
  {
    icon: <Package className="w-6 h-6 text-blue-600" />,
    text: "Prémium alumínium és acél kialakítás.",
  },
];

const tags = ["Spatial Audio", "ANC", "H1 chip", "Smart Case"];

const Items = () => {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* */}
        <div>
          <p className="uppercase text-sm tracking-wide text-gray-500 mb-2">
            Termékismertető
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
            Kiegyensúlyozott hangzás, intelligens technológia.
          </h2>

          {/* Feature  */}
          <ul className="space-y-4 mb-8">
            {features.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span>{item.icon}</span>
                <span className="text-lg text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Chip */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/*  */}
        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-2xl shadow-md p-8">
            <img
              src={product}
              alt="AirPods Max"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Items;
