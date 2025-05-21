const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Stat Box 1 */}
        <div className="flex flex-col items-center border border-black rounded-[20px] p-5">
          <div className="text-primary mb-4">
            <svg
              className="w-12 h-12 fill-current"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64v160zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8zM512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64v272z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">+300 garages</h3>
          <p className="text-gray-700 mt-2">
            Un réseau de plus de 300 garages sélectionnés pour leur expertise et
            leur fiabilité, prêts à vous offrir le meilleur service où que vous
            soyez.
          </p>
        </div>

        {/* Stat Box 2 */}
        <div className="flex flex-col items-center border border-black rounded-[20px] p-5">
          <div className="text-primary mb-4">
            <svg
              className="w-12 h-12 fill-current"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">+50 services</h3>
          <p className="text-gray-700 mt-2">
            Une gamme complète de plus de 50 services pour répondre à tous vos
            besoins automobiles, de l'entretien régulier aux réparations
            spécialisées.
          </p>
        </div>

        {/* Stat Box 3 */}
        <div className="flex flex-col items-center border border-black rounded-[20px] p-5">
          <div className="text-primary mb-4">
            <svg
              className="w-12 h-12 fill-current"
              viewBox="0 0 496 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 224c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm194.4 64H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">+400 clients satisfaits</h3>
          <p className="text-gray-700 mt-2">
            Rejoignez les plus de 400 clients qui nous font déjà confiance pour
            la qualité de nos services et la facilité d'utilisation de notre
            plateforme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
