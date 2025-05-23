import Button from "./Button";
import ServicesSection from "./ServiceCard";

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen md:min-h-[80vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('./images/heroBg.jpg')`,
            filter: "brightness(0.4)",
          }}
        />
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="ml-4 md:ml-12">
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
                Trouvez un garage automobile facilement <br /> FI
                <span className="text-primary">XI</span> un rendez-vous
              </h1>
              {/* search */}
              <div className="bg-white max-w-5xl mx-auto p-6 md:p-8 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* garage name */}
                  <div className="w-full md:w-1/4">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="Nom du garage"
                    />
                  </div>

                  {/* domaine */}
                  <div className="w-full md:w-1/4">
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
                      <option value="" disabled selected>
                        Tout les domaines
                      </option>
                      <option value="lavage">Lavage</option>
                      <option value="depannage">Dépannage</option>
                    </select>
                  </div>

                  {/* villes */}
                  <div className="w-full md:w-1/4">
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
                      <option value="" disabled selected>
                        Tout les villes
                      </option>
                      <option value="marrakech">Marrakech</option>
                      <option value="casablance">Casablanca</option>
                      <option value="rabat">Rabat</option>
                    </select>
                  </div>

                  {/* btn */}
                  <div className="w-full md:w-1/4">
                    <Button title="Chercher" className="w-full" />
                  </div>
                </div>
              </div>

              {/* search close */}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="-mt-32 z-10 relative">
        <ServicesSection />
      </div>
    </>
  );
};

export default Hero;
