import { useState } from "react";

const ContactInfo = () => {
  const [showPhone, setShowPhone] = useState(false);
  const phoneNumber = "+212-0767-792442";
  const whatsappLink =
    "https://wa.me/2120767792442?text=Bonjour%2C+je+voudrais+avoir+plus+d%27informations+sur+Kech+Polish.";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Informations de contact
      </h2>

      {/* Phone Button */}
      <div className="hidden md:flex justify-center">
        <button
          onClick={() => setShowPhone(true)}
          className="flex items-center justify-center px-6 py-3 bg-red-700 text-white rounded-full w-full max-w-md text-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24">
            <path d="M20,15.5C18.83,15.5 17.67,15.33 16.56,15C16.14,14.88 15.68,15 15.37,15.29L13.21,17.44C10.07,15.74 8.25,13.92 6.56,10.79L8.71,8.63C9,8.32 9.12,7.86 9,7.44C8.67,6.33 8.5,5.17 8.5,4C8.5,3.45 8.05,3 7.5,3H4C3.45,3 3,3.45 3,4C3,13.39 10.61,21 20,21C20.55,21 21,20.55 21,20V16.5C21,15.95 20.55,15.5 20,15.5Z" />
          </svg>
          {showPhone ? phoneNumber : "Afficher le N° de téléphone"}
        </button>
      </div>

      {/* WhatsApp Button */}
      <div className="hidden md:flex justify-center">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-full w-full max-w-md text-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 32 32">
            <path d="M16 0C7.164 0 0 7.164 0 16c0 3.219.943 6.219 2.727 8.879L0 32l7.285-2.693C9.762 30.633 12.855 32 16 32c8.837 0 16-7.164 16-16S24.836 0 16 0zm8.88 23.768c-.402 1.119-2.009 2.121-3.275 2.398-1.756.395-3.926.707-11.516-4.875C5.844 15.809 4.894 13.178 5.147 11.37c.224-1.557 1.513-2.65 2.793-2.79.797-.087 1.563-.006 2.241.154.34.082.531.271.623.487.15.34.486 1.157.53 1.234.121.222.174.487.03.787-.14.301-.211.482-.419.734-.21.251-.44.56-.623.747-.209.216-.43.453-.185.889.495.936 1.941 3.11 3.714 4.222 1.04.652 1.563.854 1.841.953.402.127.644.107.879-.065.275-.197.626-.766.787-1.03.161-.263.342-.262.56-.175.218.086 1.37.645 1.602.762.234.117.391.175.45.275.086.174.086 1.132-.316 2.253z" />
          </svg>
          Contacter sur WhatsApp
        </a>
      </div>

      {/* Mobile-Only Call Button */}
      <div className="flex md:hidden flex-col gap-4">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center px-6 py-3 bg-red-700 text-white rounded-full w-full text-lg"
        >
          Appeler
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-full w-full text-lg"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
