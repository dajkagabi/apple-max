import React from 'react';
import { Truck, Phone, PenTool } from 'lucide-react';

const cardData = [
  {
    icon: Truck,
    title: 'Ingyenes kézbesítés',
    description: 'Ingyenes visszaküldéssel. A kézbesítés dátuma a rendelés véglegesítése előtt jelenik meg.',
    linkText: 'Bővebben',
  },
  {
    icon: Phone,
    title: 'Kérj segítséget a vásárláshoz',
    description: 'Kérdésed van? Beszélj az egyik szakértőnkkel.',
    linkText: 'Hívj bennünket: 06 80 983 824.',
  },
  {
    icon: PenTool,
    title: 'Tedd egyedivé',
    description: 'Gravíroztasd az AirPods tokjára monogramot és emojit – ingyen, csak az Apple-nél.',
    linkText: 'Bővebben',
  },
];

// eslint-disable-next-line no-unused-vars
const Card = ({ icon: Icon, title, description, linkText }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="mb-4">
      <Icon size={48} className="text-gray-500" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4 text-sm max-w-xs">{description}</p>
    {linkText && (
      <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
        {linkText}
      </a>
    )}
  </div>
);

const Answer = () => (
  <div className="bg-gray-100 py-12 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          linkText={card.linkText}
        />
      ))}
    </div>
  </div>
);

export default Answer;