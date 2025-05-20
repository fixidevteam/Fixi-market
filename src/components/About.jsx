import React from "react";

const About = () => {
  return (
    <>
      <section>
        <div className="bg-gray-100 py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-black">
                Qu'est-ce que{" "}
                <span className="text-black text-4xl font-bold">FI</span>
                <span className="text-primary text-4xl font-bold">XI</span> ?
              </h2>
              <p className="text-lg text-gray-800">
                <span className="text-black font-bold text-xl">FI</span>
                <span className="text-primary font-bold text-xl">XI</span> est
                une plateforme innovante qui connecte les professionnels
                d’entretien des véhicules et les <strong>garages</strong> de
                confiance avec les clients à la recherche de services de
                réparation et d’entretien.
              </p>
              <p className="text-lg text-gray-800">
                Nous simplifions le processus de prise de rendez-vous en offrant
                une solution rapide et fiable.
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold">
                  Avec <span className="text-black font-bold text-xl">FI</span>
                  <span className="text-primary font-bold text-xl">XI</span>,
                  vous pouvez :
                </p>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>Rechercher facilement des garages près de chez vous.</li>
                  <li>Comparer les services.</li>
                  <li>Prendre rendez-vous en ligne en toute simplicité.</li>
                </ul>
                <p className="text-lg text-gray-800">
                  Notre mission est de rendre les services d’entretiens des
                  véhicules plus accessibles et transparents pour tous.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <a href="https://fixi.ma/">
                <img
                  src="./images/fixi.png"
                  alt="fixi"
                  className="w-full max-w-sm rounded shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      //
      <section>
        <div className="bg-gray-100 py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <a
                href="https://fixi.ma/fixiapp/fixi-plus/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/fixiPlus.png"
                  alt="fixi plus logo"
                  className="w-full max-w-sm rounded shadow-md"
                />
              </a>
            </div>
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-black">
                <a
                  href="https://fixi.ma/fixiapp/fixi-plus/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Qu'est-ce que{" "}
                  <span className="text-black text-4xl font-bold">FI</span>
                  <span className="text-[#BB0102] text-4xl font-bold">XI</span>
                  <span className="text-black text-4xl font-bold">-</span>
                  <span className="text-[#1d5197] text-4xl font-bold">
                    plus
                  </span>{" "}
                  ?
                </a>
              </h2>
              <p className="text-lg text-gray-800">
                <span className="text-black font-bold text-xl">FI</span>
                <span className="text-[#BB0102] font-bold text-xl">XI</span>
                <span className="text-black font-bold text-xl">–</span>
                <span className="text-[#1d5197] font-bold text-xl">
                  plus
                </span>{" "}
                est une plateforme intelligente qui centralise et simplifie la
                gestion de tous vos besoins automobiles et administratifs.
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>
                  <strong>Stocker et suivre</strong> tous vos documents (carte
                  grise, assurance, contrôle technique, etc.).
                </li>
                <li>
                  <strong>Recevoir des rappels</strong> pour ne manquer aucune
                  échéance importante.
                </li>
                <li>
                  <strong>Trouver rapidement un garage partenaire</strong> pour
                  l’entretien et la réparation de votre véhicule.
                </li>
                <li>
                  <strong>Garder un historique précis des réparations</strong>,
                  avec les dates, la nature des interventions et les coûts.
                </li>
              </ul>
              <p className="text-lg text-gray-800">
                Avec{" "}
                <strong>
                  FIXI<span className="text-[#1d5197]">+</span>
                </strong>
                , gagnez du temps, évitez les tracas administratifs et
                bénéficiez d’un réseau de professionnels de confiance. Adoptez
                dès maintenant une gestion automobile moderne, efficace et
                connectée !
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
