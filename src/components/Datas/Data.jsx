import React from "react";
import {
  Waves,
  Headphones,
  Airplay,
  Ear,
  Cpu,
  Usb,
  Link,
  Radar,
  Watch,
  MinusCircle,
  Mic,
  Sparkles,
  Battery,
  Zap,
  BatteryCharging,
} from "lucide-react";

const Data = () => {
  const dimensions = [
    { icon: <Battery size={28} />, title: "Tömeg", subtitle: "384,8 g" },
    {
      icon: <BatteryCharging size={28} />,
      title: "Smart Case tok",
      subtitle: "134,5 g",
    },
  ];

  const categories = [
    {
      title: "Hálózati kapcsolatok",
      features: [
        {
          icon: <Link size={28} />,
          title: "Bluetooth 5.0",
          subtitle: "Vezeték nélküli kapcsolat a legújabb szabvány szerint.",
        },
      ],
    },
    {
      title: "A doboz tartalma",
      features: [
        {
          icon: <Headphones size={28} />,
          title: "AirPods Max",
          subtitle: "Az ikonikus fejhallgató.",
        },
        {
          icon: <Sparkles size={28} />,
          title: "Smart Case tok",
          subtitle: "Védi és energiatakarékos módba helyezi a fejhallgatót.",
        },
        {
          icon: <Usb size={28} />,
          title: "USB-C töltőkábel",
          subtitle: "Gyors és kompatibilis töltés.",
        },
        {
          icon: <Mic size={28} />,
          title: "Dokumentáció",
          subtitle: "Használati útmutató és garancia.",
        },
      ],
    },
    {
      title: "Kisegítő lehetőségek",
      features: [
        {
          icon: <Ear size={28} />,
          title: "Élő hallgatás",
          subtitle: "Segít a hallásban.",
        },
        {
          icon: <Waves size={28} />,
          title: "Fejhallgató hangszintjei",
          subtitle: "Testreszabható hangbeállítások.",
        },
        {
          icon: <Airplay size={28} />,
          title: "Fejhallgató alkalmazkodása",
          subtitle: "Alkalmazkodik a fül formájához.",
        },
      ],
    },
    {
      title: "Rendszerkövetelmények",
      features: [
        {
          icon: <Cpu size={28} />,
          title: "iOS / iPadOS",
          subtitle: "Legújabb verzióval kompatibilis.",
        },
        {
          icon: <Watch size={28} />,
          title: "watchOS",
          subtitle: "Apple Watch támogatás.",
        },
        {
          icon: <Radar size={28} />,
          title: "macOS",
          subtitle: "Mac kompatibilitás.",
        },
        {
          icon: <Battery size={28} />,
          title: "tvOS",
          subtitle: "Apple TV kompatibilitás.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Méret, súly */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Méret és tömeg
            </h2>
            <p className="text-gray-600 mb-12">
              Az AirPods Max a Smart Case tokkal együtt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {dimensions.map((d, i) => (
              <div
                key={i}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  {d.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {d.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{d.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specifikációk  */}
        <div className="max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <div key={idx} className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {category.features.map((f, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {f.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{f.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Data;
