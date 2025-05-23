import React from "react";
import Button from "../Button";
const CallToActionBooking = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Votre voiture a besoin d’un service ? Réservez votre rendez-vous dès
        aujourd’hui !
      </h2>
      <a
        href="https://fixi.ma/RDV?garage_ref=GAR-00001"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button title={"Voir plus d’horaires"} />
      </a>
    </div>
  );
};

export default CallToActionBooking;
