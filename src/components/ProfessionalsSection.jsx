const garages = [
  {
    title: "Hard Auto Services Ain Sebaa",
    city: "Casablanca",
    image:
      "https://fixi.ma/wp-content/uploads/2024/02/IMG_20220209_102127_373.webp",
    url: "https://fixi.ma/casablanca/hard-auto-services/",
  },
  {
    title: "Kech Polish",
    city: "Marrakech",
    image:
      "https://fixi.ma/wp-content/uploads/2024/07/Heureuse_fete_de_lAID.jpg",
    url: "https://fixi.ma/marrakech/kech-polish/",
  },
  {
    title: "AZ Pro carrosserie et mécanique",
    city: "Casablanca",
    image:
      "https://fixi.ma/wp-content/uploads/2024/07/2022-11-26-1-scaled.webp",
    url: "https://fixi.ma/casablanca/az-pro-carrosserie-et-mecanique/",
  },
  {
    title: "Renault Hakam Frères",
    city: "Rabat",
    image: "https://fixi.ma/wp-content/uploads/2024/07/2014-02-13.jpg",
    url: "https://fixi.ma/rabat/renault-hakam-freres/",
  },
  {
    title: "H-KAR TECH",
    city: "Rabat",
    image: "https://fixi.ma/wp-content/uploads/2024/07/2023-03-29.jpg",
    url: "https://fixi.ma/rabat/h-kar-tech/",
  },
  {
    title: "Auto Vroom Marrakech",
    city: "Marrakech",
    image: "https://fixi.ma/wp-content/uploads/2024/07/2024-01-09.jpg",
    url: "https://fixi.ma/marrakech/auto-vroom/",
  },
  {
    title: "Auto One",
    city: "Casablanca",
    image: "https://fixi.ma/wp-content/uploads/2024/07/2020-11-06-3.webp",
    url: "https://fixi.ma/casablanca/auto-one/",
  },
  {
    title: "MIDAS ALFOURAT",
    city: "Casablanca",
    image: "https://fixi.ma/wp-content/uploads/2024/07/2024-07-17-1.webp",
    url: "https://fixi.ma/casablanca/midas-alfourat/",
  },
  {
    title: "Siligom Ville verte Bouskoura",
    city: "Casablanca",
    image:
      "https://fixi.ma/wp-content/uploads/2024/08/D74FC9CA-DCFF-426B-B0FC-C69E9F5A892C-2.webp",
    url: "https://fixi.ma/casablanca/siligom-ville-verte-bouskoura/",
  },
];

const ProfessionalsSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Nos professionnels
        </h2>
        <div className="w-80 h-1 bg-black mb-12 mx-auto"></div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {garages.map((garage, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <a href={garage.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={garage.image}
                    alt={garage.title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <span className="absolute top-2 right-2 bg-secondary/90 text-white text-xs px-3 py-1 rounded-full shadow">
                  {garage.city}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  <a
                    href={garage.url}
                    className="hover:text-red-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {garage.title}
                  </a>
                </h3>
                <a
                  href={garage.url}
                  className="text-sm text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lire plus
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsSection;
