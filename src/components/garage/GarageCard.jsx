import React from "react";

const GarageCard = () => {
  return (
    <div className="bg-white w-full flex flex-col p-4 rounded-lg shadow-md">
      {/* Header Image */}
      <div className="w-full">
        <img
          src="https://fixi.ma/wp-content/uploads/2024/07/Heureuse_fete_de_lAID.jpg"
          alt="Kech Polish banner"
          className="w-full h-80 rounded-lg object-cover"
        />
      </div>

      {/* Title Section */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800 capitalize">
            kech polish
          </h2>
          <div className="flex items-center">
            <img
              src="../images/verifie.png"
              alt="Vérifié"
              className="h-5 w-5"
            />
          </div>
        </div>
      </div>

      {/* Location & Info */}
      <div className="mt-4">
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-medium">
            -
            <a href="https://fixi.ma/marrakech/" className="text-primary">
              Marrakech
            </a>
          </h2>
          <h3 className="text-sm">
            -
            <a
              href="https://fixi.ma/marrakech/el-massar/"
              className="text-black/50"
            >
              El Massar
            </a>
          </h3>
        </div>
        <p className="mt-2 flex items-center text-gray-700">
          <img
            src="../images/location.svg"
            alt="Location emoji"
            className="w-4 h-4 mr-1"
          />
          Magasin A, 429 lotissement, Marrakech 40000
        </p>
      </div>

      {/* Services Info */}
      <div className="mt-4">
        <h2 className="text-sm font-semibold text-primary">- Lavage</h2>
        <ul className="mt-2 text-black">
          <li>- Modes de paiement : Espèces (Cash)</li>
          <li>- Services à domicile : Non</li>
        </ul>
      </div>
    </div>
  );
};

export default GarageCard;
