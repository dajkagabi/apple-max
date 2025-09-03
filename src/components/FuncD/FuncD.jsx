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

const FuncD = () => {
  const categories = [
    {
      title: "Hangzás és Zajszűrés",
      features: [
        {
          icon: <Waves size={28} />,
          title: "Pro szintű aktív zajszűrés (ANC)",
          subtitle:
            "A nyolc mikrofon és a fejlett algoritmusok együttműködése biztosítja a környezeti zajok hatékony kiszűrését.",
        },
        {
          icon: <Headphones size={28} />,
          title: "Transzparencia mód",
          subtitle:
            "Lehetővé teszi a környezet hangjainak hallását, miközben a zene is szól.",
        },
        {
          icon: <Airplay size={28} />,
          title: "Személyre szabott térbeli hangzás",
          subtitle:
            "A dinamikus fejkövetés révén a hangok térben helyezkednek el.",
        },
        {
          icon: <Ear size={28} />,
          title: "Adaptív EQ",
          subtitle:
            "A fejhallgató folyamatosan elemzi a fülünk formáját és a környezeti zajokat.",
        },
      ],
    },
    {
      title: "Technológia és Kompatibilitás",
      features: [
        {
          icon: <Cpu size={28} />,
          title: "Apple H1 chip",
          subtitle:
            "Valós idejű hangfeldolgozás, alacsony késleltetés és gyors párosítási élmény.",
        },
        {
          icon: <Usb size={28} />,
          title: "USB-C csatlakozás",
          subtitle:
            "Támogatja a veszteségmentes hangzást és az ultra-alacsony késleltetést.",
        },
        {
          icon: <Link size={28} />,
          title: "Automatikus eszközváltás",
          subtitle: "Zökkenőmentesen válthatunk eszközt iPhone és Mac között.",
        },
        {
          icon: <Radar size={28} />,
          title: "Fej automatikus érzékelés",
          subtitle:
            "A zene automatikusan szünetel, amikor leveszed a fejhallgatót.",
        },
      ],
    },
    {
      title: "Vezérlés és Kényelem",
      features: [
        {
          icon: <Watch size={28} />,
          title: "Digitális korona",
          subtitle:
            "Hangerő, zenevezérlés, hívások és Siri aktiválása egyetlen eszközön.",
        },
        {
          icon: <MinusCircle size={28} />,
          title: "Zajszűrés vezérlő gomb",
          subtitle:
            "Könnyedén válthatunk az ANC és a Transzparencia mód között.",
        },
        {
          icon: <Mic size={28} />,
          title: "Siri támogatás",
          subtitle: "Egyszerű hangutasításokkal vezérelhetjük a fejhallgatót.",
        },
        {
          icon: <Sparkles size={28} />,
          title: "Kényelmes kialakítás",
          subtitle:
            "Memóriahab fülpárnák és légáteresztő fejpánt a hosszú távú kényelemért.",
        },
      ],
    },
    {
      title: "Akkumulátor és Töltés",
      features: [
        {
          icon: <Battery size={28} />,
          title: "Akár 20 óra használati idő",
          subtitle: "ANC és térbeli hangzás mellett is.",
        },
        {
          icon: <Zap size={28} />,
          title: "Gyors töltés",
          subtitle:
            "5 perc töltés körülbelül 1,5 óra lejátszási időt biztosít.",
        },
        {
          icon: <BatteryCharging size={28} />,
          title: "Smart Case",
          subtitle:
            "Alacsony energiafogyasztású állapotba helyezi a fejhallgatót.",
        },
      ],
    },
  ];

  return (
   <div className="bg-gray-50 py-16 px-6">
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

  );
};

export default FuncD;
