import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import JoinFixiSection from "../components/JoinFixiSection";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <About />
      <HowItWorks />
      <JoinFixiSection />
    </div>
  );
};

export default HomePage;
