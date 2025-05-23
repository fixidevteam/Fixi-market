import React from "react";

const garages = [
  {
    name: "Auto Vroom Marrakech",
    city: "Marrakech",
    link: "https://fixi.ma/marrakech/auto-vroom/",
    image: "https://fixi.ma/wp-content/uploads/2024/07/2024-01-09-225x300.jpg",
  },
  {
    name: "Master shine",
    city: "Marrakech",
    link: "https://fixi.ma/marrakech/master-shine/",
    image:
      "https://fixi.ma/wp-content/uploads/2025/01/2021-04-12-1-180x300.jpg",
  },
  {
    name: "Wash’up Carré Eden Marrakech",
    city: "Marrakech",
    link: "https://fixi.ma/marrakech/washup-carre-eden-marrakech/",
    image: "https://fixi.ma/wp-content/uploads/2025/01/2024-01-10-225x300.jpg",
  },
  {
    name: "Alpha Detailing Workshop: polissage, lustrage, protection ceramic, habillage, rénovation",
    city: "Marrakech",
    link: "https://fixi.ma/marrakech/alpha-detailing-workshop-polissage-lustrage-protection-ceramic-habillage-renovation/",
    image: "https://fixi.ma/wp-content/uploads/2025/01/2024-05-09-225x300.jpg",
  },
];

const SimilarGarageCard = ({ garage }) => (
  <div className="bg-white shadow overflow-hidden border border-black rounded-2xl">
    <div className="relative">
      <a href={garage.link}>
        <img
          src={garage.image}
          alt={garage.name}
          className="w-full h-52 object-cover"
        />
      </a>
      <span className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs rounded">
        {garage.city}
      </span>
    </div>
    <div className="p-4 text-center">
      <a href={garage.link} style={{ color: "black" }}>
        <h4 className="text-lg font-semibold">{garage.name}</h4>
      </a>
      <a
        href={garage.link}
        className="text-red-700 text-xs font-medium hover:underline hover:text-black transition duration-150 ease-in"
      >
        LIRE PLUS
      </a>
    </div>
  </div>
);

const SimilarGarages = () => {
  return (
    <div className="grid gap-6 grid-cols-1 p-4 border-4 border-black rounded-3xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Garages offrant des services similaires :
      </h2>
      {garages.map((garage, index) => (
        <SimilarGarageCard key={index} garage={garage} />
      ))}
    </div>
  );
};

export default SimilarGarages;
