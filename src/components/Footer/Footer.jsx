import React from 'react';


export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 text-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        
        {/* Vásárlás és információ */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Vásárlás és információ</h3>
          <ul className="space-y-2">
            {["Áruház","Mac","iPad","iPhone","Watch","AirPods","TV & Otthon","AirTag","Tartozékok"].map((item) => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
          <h3 className="font-medium text-gray-800 mt-4 mb-2">Apple Tárca</h3>
          <ul>
            <li><a href="#" className="hover:underline">Apple Pay</a></li>
          </ul>
        </div>

        {/* Fiók */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Fiók</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Apple-fiók kezelése</a></li>
            <li><a href="#" className="hover:underline">Apple Store-fiók</a></li>
            <li><a href="#" className="hover:underline">iCloud.com</a></li>
          </ul>

          <h3 className="font-medium text-gray-800 mt-4 mb-2">Szórakozás</h3>
          <ul className="space-y-2">
            {["Apple One","Apple TV+","Apple Music","Apple Arcade","App Store"].map((item) => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Apple Store */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Apple Store</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Apple Store app</a></li>
            <li><a href="#" className="hover:underline">Rendelés állapota</a></li>
            <li><a href="#" className="hover:underline">Vásárlási segítség</a></li>
          </ul>
        </div>

        {/* Üzleti megoldások és Oktatás */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Üzleti megoldások</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Az Apple és az üzleti világ</a></li>
            <li><a href="#" className="hover:underline">Vásárlás üzleti célra</a></li>
          </ul>

          <h3 className="font-medium text-gray-800 mt-4 mb-2">Oktatás</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Az Apple és az oktatás</a></li>
            <li><a href="#" className="hover:underline">Vásárlás általános és középiskolai tanulmányokhoz</a></li>
            <li><a href="#" className="hover:underline">Vásárlás felsőfokú tanulmányokhoz</a></li>
          </ul>
        </div>

        {/* Apple által képviselt értékek */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Az Apple által képviselt értékek</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Kisegítő lehetőségek</a></li>
            <li><a href="#" className="hover:underline">Környezetvédelem</a></li>
            <li><a href="#" className="hover:underline">Adatvédelem</a></li>
          </ul>
        </div>

        {/* Az Apple-ről */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Az Apple-ről</h3>
          <ul className="space-y-2">
            {[
              "Newsroom",
              "Apple vezetőség",
              "Karrierlehetőségek",
              "Jótállás",
              "Befektetői kapcsolatok",
              "Üzleti etika és törvényesség",
              "Kapcsolatfelvétel az Apple-lel",
            ].map((item) => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/*  */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-500 border-t border-gray-200">
        <p className="mb-2">
          További vásárlási lehetőségek:{" "}
          <a href="#" className="text-blue-600 hover:underline">keress egy viszonteladót</a> 
          {" "}a közeledben, vagy hívj minket:{" "}
          <a href="tel:0680983824" className="text-blue-600 hover:underline">06 80 983 824</a>.
        </p>
        <p className="mb-2">Copyright © 2025 Apple Inc. Minden jog fenntartva.</p>
        <ul className="flex flex-wrap gap-3 mb-2">
          {[
            "Adatvédelmi szabályzat",
            "Sütik használata",
            "Használati feltételek",
            "Értékesítés és visszatérítés",
            "Jogi megjegyzések",
            "Honlaptérkép",
          ].map((item) => (
            <li key={item}><a href="#" className="hover:underline">{item}</a></li>
          ))}
        </ul>
        <p>Magyarország</p>
      </div>
    </footer>
  );
}
