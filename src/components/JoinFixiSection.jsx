import React from "react";
import Button from "./Button";

const JoinFixiSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Vous avez un garage ? Rejoignez
            <span className="text-black text-4xl font-bold">FI</span>
            <span className="text-primary text-4xl font-bold">XI</span>
          </h2>

          <p className="text-gray-700 text-lg">
            Vous possédez un garage et souhaitez attirer plus de clients ?
            Rejoignez <strong>FIXI</strong>, la plateforme qui connecte les
            garages aux automobilistes à la recherche de services fiables et de
            qualité. En devenant partenaire, vous augmenterez votre visibilité,
            élargirez votre clientèle et boosterez votre activité. De plus, vous
            profiterez de nombreux autres avantages exclusifs en nous
            rejoignant.
          </p>

          <div>
            <p className="font-semibold text-lg mb-2">
              Comment nous rejoindre :
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li>
                <strong>Cliquez sur le bouton ci-dessous.</strong>
              </li>
              <li>
                <strong>Remplissez le formulaire d’inscription.</strong>
              </li>
              <li>
                <strong>Notre équipe vous contactera rapidement.</strong>
              </li>
            </ol>
          </div>

          <p className="text-gray-700 text-lg">
            N’attendez plus, inscrivez votre garage sur Fixi dès aujourd’hui !
          </p>

          <div>
            <a
              href="https://fixi-ma.preview-domain.com/ajouter-votre-garage/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button title={"Vous avez un garage ?"} />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 hidden md:block transform hover:scale-110 transition-transform duration-300">
          <img
            src="./images/mecanicien.webp"
            alt="mécanicien"
            width={372}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinFixiSection;
