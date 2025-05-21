import React from "react";

const articles = [
  {
    title:
      "Comment Entretenir Votre Voiture Pour Éviter des Réparations Coûteuses",
    excerpt:
      "L’entretien régulier de votre voiture est essentiel pour prévenir des réparations coûteuses et prolonger la durée de vie de votre véhicule. Voici quelques conseils pratiques pour entretenir votre voiture et éviter des pannes inattendues.",
    image:
      "https://fixi.ma/wp-content/uploads/2024/06/WIN_20231028_14_24_31_Pro-768x512.jpg",
    url: "https://fixi.ma/comment-entretenir-votre-voiture-pour-eviter-des-reparations-couteuses/",
  },
  {
    title: "Les 5 Pannes Mécaniques les Plus Courantes et Comment les Éviter",
    excerpt:
      "Les pannes mécaniques peuvent survenir à tout moment et causer des désagréments. Cependant, certaines pannes sont plus courantes que d’autres. Voici les cinq pannes mécaniques les plus fréquentes et des conseils pour les éviter.",
    image:
      "https://fixi.ma/wp-content/uploads/2024/06/repair-man-making-car-service-1024x683.jpg",
    url: "https://fixi.ma/les-5-pannes-mecaniques-les-plus-courantes-et-comment-les-eviter/",
  },
  {
    title: "Guide pour Réaliser des Petites Réparations Automobile Soi-Même",
    excerpt:
      "Apprendre à réaliser certaines petites réparations sur votre voiture peut vous faire économiser du temps et de l’argent. Voici un guide pour vous aider à effectuer des réparations simples et sécuritaires.",
    image:
      "https://fixi.ma/wp-content/uploads/2024/06/man-calling-help-fix-his-car-1024x684.jpg",
    url: "https://fixi.ma/guide-pour-realiser-des-petites-reparations-automobile-soi-meme/",
  },
];

const LastArticlesSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Derniers articles
        </h2>
        <div className="w-80 h-1 bg-black mb-12 mx-auto"></div>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden p-2"
            >
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover rounded-xl"
                />
              </a>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors mb-3">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h3>
                <hr className="border-gray-300 mb-3" />
                <p className="text-sm text-gray-700">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastArticlesSection;
