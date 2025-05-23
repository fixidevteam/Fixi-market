import AppointmentBooking from "../components/appointment/AppointmentBooking";
import CallToActionBooking from "../components/appointment/CallToActionBooking";
import Banner from "../components/Banner";
import ContactInfo from "../components/garage/ContactInfo";
import GarageCard from "../components/garage/GarageCard";
import GaragePresentation from "../components/garage/GaragePresentation";
import SimilarGarages from "../components/garage/SimilarGarages";

const GarageDetailsPage = () => {
  // here will be the fetching api than we will pass the info to each component by the props !!!!!!!
  return (
    <div className="bg-gray-100">
      <Banner title={"Kech Polish"} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* box 1 : details of garage */}
          <div className="md:col-span-2 space-y-5">
            <GarageCard />
            <CallToActionBooking />
            <AppointmentBooking garageRef={"GAR-00001"} />
            <GaragePresentation />
            <ContactInfo />
          </div>
          {/* box 2 : similar garage */}
          <div className="md:col-span-1">
            {/* SimilarGarage component or other content here */}
            <SimilarGarages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GarageDetailsPage;
