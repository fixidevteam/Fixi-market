import { useState, useEffect, useRef } from "react";
import api from "../../api/axiosConfig";

const AppointmentBooking = ({ garageRef }) => {
  // State variables
  const [availableDates, setAvailableDates] = useState([]);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [services, setServices] = useState([]);
  const [marques, setMarques] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showingAllSlots, setShowingAllSlots] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [countdownSeconds, setCountdownSeconds] = useState(60);
  const [isLoading, setIsLoading] = useState({
    dates: false,
    times: false,
    booking: false,
    verification: false,
  });
  const [error, setError] = useState({
    booking: "",
    verification: "",
  });
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    categorie_de_service: "",
    modele: "",
    vin: "",
    objet_du_RDV: "",
    verificationCode: "",
  });

  const countdownTimer = useRef(null);

  // Helper functions
  const getShortDayName = (date) => {
    const days = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"];
    return days[date.getDay()];
  };

  const getShortMonthName = (date) => {
    const months = [
      "janv.",
      "févr.",
      "mars",
      "avr.",
      "mai",
      "juin",
      "juil.",
      "août",
      "sept.",
      "oct.",
      "nov.",
      "déc.",
    ];
    return months[date.getMonth()];
  };

  const formatDateForDisplay = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${getShortMonthName(date)} ${date.getFullYear()}`;
  };

  const validateVIN = (vin) => {
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
    return vinRegex.test(vin);
  };

  // API functions using axios
  const fetchAvailableDates = async () => {
    setIsLoading((prev) => ({ ...prev, dates: true }));
    try {
      const response = await api.get(
        `/available-datesShort?garage_ref=${garageRef}`
      );
      setAvailableDates(response.available_dates || []);
      setUnavailableDates(response.unavailable_dates || []);
      setServices(response.services || []);
      setMarques(response.marques || []);

      // Select first available date by default
      if (response.available_dates?.length > 0) {
        selectDate(response.available_dates[0].date);
      }
    } catch (error) {
      console.error("Error fetching dates:", error);
      setError((prev) => ({
        ...prev,
        booking: "Erreur lors du chargement des dates. Veuillez réessayer.",
      }));
    } finally {
      setIsLoading((prev) => ({ ...prev, dates: false }));
    }
  };

  const fetchTimeSlots = async (date) => {
    setIsLoading((prev) => ({ ...prev, times: true }));
    try {
      const response = await api.get(
        `/time-slotsShort?garage_ref=${garageRef}&date=${date}`
      );
      setTimeSlots(response.time_slots || []);
      setShowingAllSlots(false);
    } catch (error) {
      console.error("Error fetching time slots:", error);
      setError((prev) => ({
        ...prev,
        booking: "Erreur lors du chargement des créneaux. Veuillez réessayer.",
      }));
    } finally {
      setIsLoading((prev) => ({ ...prev, times: false }));
    }
  };

  // Event handlers
  const selectDate = (date) => {
    setSelectedDate(date);
    fetchTimeSlots(date);
  };

  const selectTimeSlot = (time) => {
    setSelectedTime(time);
    setIsBookingModalOpen(true);
  };

  const toggleShowAllSlots = () => {
    setShowingAllSlots(!showingAllSlots);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.fullName) {
      setError((prev) => ({ ...prev, booking: "Le nom est obligatoire." }));
      return;
    }

    // Phone validation
    const phoneRegex = /^(?:\+212|0)([6-7]\d{8})$/;
    if (!phoneRegex.test(formData.phone)) {
      setError((prev) => ({
        ...prev,
        booking: "Format de téléphone invalide.",
      }));
      return;
    }

    // Email validation if provided
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError((prev) => ({
        ...prev,
        booking: "Format d'adresse e-mail invalide.",
      }));
      return;
    }

    if (!formData.categorie_de_service) {
      setError((prev) => ({ ...prev, booking: "Le domaine est obligatoire." }));
      return;
    }

    // VIN validation if provided
    if (formData.vin && !validateVIN(formData.vin.toUpperCase())) {
      setError((prev) => ({
        ...prev,
        booking:
          "Le numéro de châssis doit comporter exactement 17 caractères alphanumériques (excluant les lettres I, O et Q).",
      }));
      return;
    }

    setIsLoading((prev) => ({ ...prev, booking: true }));
    setError((prev) => ({ ...prev, booking: "" }));

    try {
      const response = await api.post("/book-appointment", {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        categorie_de_service: formData.categorie_de_service,
        modele: formData.modele,
        objet_du_RDV: formData.objet_du_RDV,
        vin: formData.vin.toUpperCase(),
        garage_ref: garageRef,
        appointment_day: selectedDate,
        appointment_time: selectedTime + ":00",
      });

      if (response.status === "verification_required") {
        startCountdown();
        setIsBookingModalOpen(false);
        setIsVerificationModalOpen(true);
      } else {
        setIsBookingModalOpen(false);
        setIsSuccessModalOpen(true);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      setError((prev) => ({
        ...prev,
        booking:
          error.message ||
          "Une erreur est survenue lors de la réservation. Veuillez réessayer.",
      }));
    } finally {
      setIsLoading((prev) => ({ ...prev, booking: false }));
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();

    if (!formData.verificationCode) {
      setError((prev) => ({
        ...prev,
        verification: "Veuillez entrer le code de vérification.",
      }));
      return;
    }

    setIsLoading((prev) => ({ ...prev, verification: true }));
    setError((prev) => ({ ...prev, verification: "" }));

    try {
      const response = await api.post("/appointments/verify", {
        email: formData.email,
        verification_code: formData.verificationCode.toString(),
        full_name: formData.fullName,
        phone: formData.phone,
        categorie_de_service: formData.categorie_de_service,
        modele: formData.modele,
        objet_du_RDV: formData.objet_du_RDV,
        vin: formData.vin.toUpperCase(),
        garage_ref: garageRef,
        appointment_day: selectedDate,
        appointment_time: selectedTime + ":00",
      });

      if (response.message === "Appointment booked successfully!") {
        stopCountdown();
        setIsVerificationModalOpen(false);
        setIsSuccessModalOpen(true);

        // Handle redirection with form submission
        const form = document.createElement("form");
        form.method = "POST";
        form.action = `https://fixi.ma/confirmation-rdv/?ejkn2=${
          response.account ? "hzne2" : "kmal4"
        }&garage_ref=${response.ref}`;

        const appointmentInput = document.createElement("input");
        appointmentInput.type = "hidden";
        appointmentInput.name = "appointment";
        appointmentInput.value = JSON.stringify(response.appointment);

        const garageInput = document.createElement("input");
        garageInput.type = "hidden";
        garageInput.name = "garage";
        garageInput.value = JSON.stringify(response.garage);

        form.appendChild(appointmentInput);
        form.appendChild(garageInput);
        document.body.appendChild(form);
        form.submit();
      } else {
        setError((prev) => ({
          ...prev,
          verification:
            error.message ||
            "Code de vérification incorrect. Veuillez réessayer.",
        }));
      }
    } catch (error) {
      console.error("Error verifying appointment:", error);
      setError((prev) => ({
        ...prev,
        verification:
          error.message ||
          "Code de vérification incorrect. Veuillez réessayer.",
      }));
    } finally {
      setIsLoading((prev) => ({ ...prev, verification: false }));
    }
  };

  const handleResendCode = async () => {
    try {
      await api.post("/resend-verification-code", {
        phone: formData.phone,
        full_name: formData.fullName,
      });

      // Reset countdown
      stopCountdown();
      setCountdownSeconds(60);
      startCountdown();

      setError((prev) => ({
        ...prev,
        booking: "Code de vérification renvoyé avec succès!",
      }));
      setTimeout(() => {
        setError((prev) => ({ ...prev, booking: "" }));
      }, 3000);
    } catch (error) {
      console.error("Error resending verification code:", error);
      setError((prev) => ({
        ...prev,
        booking:
          error.message ||
          "Une erreur est survenue lors de l'envoi du code. Veuillez réessayer.",
      }));
    }
  };

  // Countdown functions
  const startCountdown = () => {
    setCountdownSeconds(60);
    countdownTimer.current = setInterval(() => {
      setCountdownSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopCountdown = () => {
    if (countdownTimer.current) {
      clearInterval(countdownTimer.current);
      countdownTimer.current = null;
    }
  };

  // Effect hooks
  useEffect(() => {
    if (garageRef) {
      fetchAvailableDates();
    }
  }, [garageRef]);

  useEffect(() => {
    return () => {
      stopCountdown();
    };
  }, []);

  // Render functions (same as before)
  const renderDates = () => {
    if (isLoading.dates) {
      return (
        <div className="animate-pulse flex space-x-2">
          {Array(7)
            .fill()
            .map((_, i) => (
              <div key={i} className="h-16 w-16 bg-gray-200 rounded-lg"></div>
            ))}
        </div>
      );
    }

    if (availableDates.length === 0) {
      return (
        <div className="text-center py-4 text-red-500">
          <i className="fas fa-exclamation-circle mr-2"></i>
          Erreur lors du chargement des dates. Veuillez réessayer.
        </div>
      );
    }

    return availableDates.map((dateObj) => {
      const date = new Date(dateObj.date);
      const isUnavailable = unavailableDates.includes(dateObj.date);

      return (
        <div
          key={dateObj.date}
          className={`flex-shrink-0 w-16 text-center py-2 border rounded-lg transition ${
            isUnavailable
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : `cursor-pointer hover:bg-primary hover:text-white hover:border-primary ${
                  selectedDate === dateObj.date
                    ? "bg-primary text-white border-primary"
                    : ""
                }`
          }`}
          onClick={!isUnavailable ? () => selectDate(dateObj.date) : undefined}
        >
          <div className="font-medium">{getShortDayName(date)}</div>
          <div className="text-sm">
            {date.getDate()} {getShortMonthName(date)}
          </div>
        </div>
      );
    });
  };

  const renderTimeSlots = () => {
    if (isLoading.times) {
      return (
        <div className="animate-pulse space-y-2 col-span-3">
          {Array(6)
            .fill()
            .map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded-lg"></div>
            ))}
        </div>
      );
    }

    if (timeSlots.length === 0) {
      return (
        <div className="text-center py-4 text-gray-500 col-span-3">
          Aucun créneau disponible pour cette date.
        </div>
      );
    }

    const slotsToShow = showingAllSlots ? timeSlots : timeSlots.slice(0, 6);

    return (
      <>
        {slotsToShow.map((slot, index) => (
          <div
            key={index}
            className={`text-center py-2 border rounded-lg cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition ${
              selectedTime === slot
                ? "bg-primary text-white border-primary"
                : ""
            }`}
            onClick={() => selectTimeSlot(slot)}
          >
            {slot}
          </div>
        ))}
        {timeSlots.length > 6 && (
          <div
            className="text-center py-2 text-primary cursor-pointer hover:underline col-span-3"
            onClick={toggleShowAllSlots}
          >
            {showingAllSlots ? "Voir moins" : "Voir plus..."}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="bg-gray-50 p-4">
      {/* Main Container */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Date Selection Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Choisir une date
          </h2>

          <div className="flex justify-between space-x-2 mb-6 overflow-x-auto pb-2">
            {renderDates()}
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* Time Slots Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Choisir un créneau
          </h2>

          <div className="grid grid-cols-3 gap-3">{renderTimeSlots()}</div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Confirmer le rendez-vous
              </h3>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="!text-gray-500 !hover:text-gray-700 !bg-transparent !border-none !shadow-none"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="mb-4">
              <p className="font-medium">
                Date:{" "}
                <span className="font-normal">
                  {selectedDate && formatDateForDisplay(selectedDate)}
                </span>
              </p>
              <p className="font-medium">
                Heure: <span className="font-normal">{selectedTime}</span>
              </p>
            </div>

            {/* Error Message */}
            {error.booking && (
              <div className="p-4 mb-2 text-sm text-red-600 bg-red-50 rounded-lg">
                {error.booking}
              </div>
            )}

            <form onSubmit={handleBookingSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Votre nom"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Votre numéro de téléphone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre Adresse E-mail (optionnelle)"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <select
                  id="categorie_de_service"
                  name="categorie_de_service"
                  value={formData.categorie_de_service}
                  onChange={handleInputChange}
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled selected>
                    Choisir le domaine
                  </option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <select
                  id="modele"
                  name="modele"
                  value={formData.modele}
                  onChange={handleInputChange}
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled selected>
                    Sélectionnez une marque
                  </option>
                  {marques.map((marque, index) => (
                    <option key={index} value={marque}>
                      {marque}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="vin"
                  name="vin"
                  placeholder="N° de chassis - VIN (optionnelle)"
                  value={formData.vin}
                  onChange={handleInputChange}
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="objet_du_RDV"
                  name="objet_du_RDV"
                  placeholder="Message pour le garage (optionnel)"
                  value={formData.objet_du_RDV}
                  onChange={handleInputChange}
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-4 py-2 !border !border-gray-300 !bg-white rounded-md !text-gray-700 !hover:bg-gray-100"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isLoading.booking}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition flex items-center justify-center"
                >
                  <span className={isLoading.booking ? "hidden" : ""}>
                    Confirmer
                  </span>
                  {isLoading.booking && (
                    <span className="ml-2">
                      <i className="fas fa-spinner fa-spin"></i>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Verification Modal */}
      {isVerificationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Vérification
            </h3>

            <p className="mb-4">
              Un code de vérification a été envoyé à votre téléphone. Veuillez
              le saisir ci-dessous :
            </p>

            {/* Error Message */}
            {error.verification && (
              <div className="p-4 mb-4 text-sm text-red-600 bg-red-50 rounded-lg">
                {error.verification}
              </div>
            )}

            <form onSubmit={handleVerificationSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="verificationCode"
                  className="block text-gray-700 mb-2"
                >
                  Code de vérification
                </label>
                <input
                  type="text"
                  id="verificationCode"
                  name="verificationCode"
                  required
                  maxLength="6"
                  value={formData.verificationCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-center text-xl font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={countdownSeconds > 0}
                  className={`!text-sm !bg-transparent ${
                    countdownSeconds > 0
                      ? "!text-gray-400 !cursor-not-allowed"
                      : "!text-primary hover:underline"
                  }`}
                >
                  Renvoyer le code
                </button>
                <span className="text-sm text-gray-500">
                  {Math.floor(countdownSeconds / 60)}:
                  {(countdownSeconds % 60).toString().padStart(2, "0")}
                </span>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsVerificationModalOpen(false);
                    stopCountdown();
                  }}
                  className="px-4 py-2 !border !border-gray-300 !bg-white rounded-md !text-gray-700 !hover:bg-gray-100"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isLoading.verification}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition flex items-center justify-center"
                >
                  <span className={isLoading.verification ? "hidden" : ""}>
                    Vérifier
                  </span>
                  {isLoading.verification && (
                    <span className="ml-2">
                      <i className="fas fa-spinner fa-spin"></i>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check text-green-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Rendez-vous confirmé!
            </h3>
            <p className="text-gray-600 mb-6">
              Votre rendez-vous a été enregistré avec succès.
            </p>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
