import React from "react";

const FlipCard = ({ svgIcon, title, frontDesc, backDesc }) => (
  <div className="w-full h-[280px] p-4 mb-8">
    {/* Added mb-8 for bottom margin */}
    <div className="flip-card h-full">
      <div className="flip-card-inner h-full">
        {/* Front Side */}
        <div className="flip-card-front bg-white border rounded-lg shadow-lg p-6 text-center h-full flex flex-col justify-center">
          <div className="flex justify-center mb-4 text-red-600">{svgIcon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 text-sm">{frontDesc}</p>
        </div>

        {/* Back Side */}
        <div className="flip-card-back bg-white border rounded-lg shadow-lg p-6 text-center h-full flex flex-col justify-center">
          <p className="text-gray-800">{backDesc}</p>
        </div>
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Comment ça marche ?
        </h2>
        <div className="w-80 h-1 bg-black mb-12 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Added negative margin to compensate for padding */}
          <FlipCard
            svgIcon={
              <svg
                className="fill-current text-primary"
                viewBox="0 0 512 512"
                width="90"
                height="90"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z" />
              </svg>
            }
            title="Comparez les services"
            frontDesc="Comparez facilement les services des garages et trouvez les meilleures offres pour vos besoins."
            backDesc="Comparez facilement les services des garages avec FIXI. Trouvez les meilleures offres adaptées à vos besoins , que ce soit pour une réparation, un entretien ou tout autre service automobile. Avec FIXI, faites le meilleur choix en toute simplicité."
          />
          <FlipCard
            svgIcon={
              <svg
                className="fill-current text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="90"
                height="90"
                viewBox="0 0 478.248 478.248"
              >
                <g>
                  <g>
                    <g>
                      <path d="M456.02,44.821H264.83c-12.26,0-22.232,9.972-22.232,22.229v98.652c0,12.258,9.974,22.23,22.232,22.23h16.787v39.161     c0,2.707,1.58,5.165,4.043,6.292c0.92,0.42,1.901,0.627,2.875,0.627c1.631,0,3.244-0.576,4.523-1.685l51.383-44.396h111.576     c12.26,0,22.23-9.973,22.23-22.23V67.05C478.25,54.792,468.277,44.821,456.02,44.821z M319.922,112.252l-10.209,9.953     l2.41,14.054c0.174,1.015-0.242,2.038-1.076,2.643c-0.469,0.342-1.027,0.516-1.588,0.516c-0.428,0-0.861-0.103-1.256-0.31     l-12.621-6.635l-12.619,6.635c-0.912,0.478-2.016,0.398-2.848-0.206s-1.248-1.628-1.074-2.643l2.41-14.054l-10.211-9.953     c-0.734-0.718-1.002-1.792-0.685-2.769c0.317-0.978,1.164-1.691,2.183-1.839l14.11-2.05l6.31-12.786     c0.457-0.923,1.396-1.507,2.424-1.507s1.969,0.584,2.422,1.507l6.312,12.786l14.107,2.05c1.02,0.148,1.863,0.861,2.184,1.839     C320.924,110.46,320.658,111.535,319.922,112.252z M384.766,112.252l-10.211,9.953l2.412,14.054     c0.172,1.015-0.244,2.038-1.076,2.643c-0.469,0.342-1.025,0.516-1.588,0.516c-0.43,0-0.859-0.103-1.26-0.31l-12.619-6.635     l-12.619,6.635c-0.912,0.478-2.014,0.398-2.846-0.206c-0.834-0.604-1.25-1.628-1.076-2.643l2.41-14.054l-10.209-9.953     c-0.734-0.718-1.002-1.792-0.684-2.769c0.316-0.978,1.16-1.691,2.182-1.839l14.109-2.05l6.311-12.786     c0.455-0.923,1.396-1.507,2.422-1.507c1.029,0,1.967,0.584,2.422,1.507l6.312,12.786l14.109,2.05     c1.021,0.148,1.863,0.861,2.182,1.839C385.768,110.46,385.5,111.535,384.766,112.252z M449.607,112.252l-10.211,9.953     l2.408,14.054c0.176,1.015-0.238,2.038-1.072,2.643c-0.471,0.342-1.027,0.516-1.59,0.516c-0.43,0-0.859-0.103-1.258-0.31     l-12.621-6.635l-12.621,6.635c-0.908,0.478-2.012,0.398-2.844-0.206c-0.834-0.604-1.248-1.628-1.076-2.643l2.412-14.054     l-10.211-9.953c-0.734-0.718-1-1.792-0.684-2.769c0.316-0.978,1.164-1.691,2.182-1.839l14.111-2.05l6.311-12.786     c0.453-0.923,1.395-1.507,2.42-1.507c1.027,0,1.971,0.584,2.426,1.507L434,105.594l14.109,2.05     c1.018,0.148,1.861,0.861,2.182,1.839C450.609,110.46,450.344,111.535,449.607,112.252z"></path>
                      <path d="M152.844,112.924c-46.76,0-72.639,24.231-72.166,70.921c0.686,63.947,27.859,102.74,72.166,102.063     c0,0,72.131,2.924,72.131-102.063C224.975,137.155,200.605,112.924,152.844,112.924z"></path>
                      <path d="M280.428,334.444l-72.074-28.736l-16.877-14.223c-4.457-3.766-11.041-3.488-15.178,0.621l-23.463,23.336l-23.533-23.342     c-4.137-4.104-10.713-4.369-15.164-0.615l-16.881,14.223l-72.074,28.739C1.975,343.69,1.995,425.884,0,433.427h305.646     C303.656,425.9,303.646,343.679,280.428,334.444z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            }
            title="Vérifiez la proximité"
            frontDesc="Trouvez rapidement un garage près de chez vous en quelques clics et choisissez celui qui vous convient."
            backDesc="Nous sélectionnons des garages en fonction de leur proximité avec votre domicile, leur transparence et leur professionnalisme. Vous pouvez ainsi choisir en toute confiance le garage qui vous offre le meilleur service et le plus proche de chez vous."
          />
          <FlipCard
            svgIcon={
              <svg
                className="fill-current text-primary"
                width="90"
                height="90"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
              </svg>
            }
            title="Prenez rendez-vous"
            frontDesc="Grâce à notre plateforme, trouvez et sélectionnez facilement un créneau horaire qui convient à votre emploi du temps."
            backDesc="Prenez rendez-vous directement en ligne en quelques clics, et recevez une confirmation instantanée. Simplifiez votre organisation en accédant à un calendrier interactif qui vous permet de visualiser toutes les disponibilités en temps réel."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
