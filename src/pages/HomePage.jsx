import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import JoinFixiSection from "../components/JoinFixiSection";
import StatsSection from "../components/StatsSection";
import ProfessionalsSection from "../components/ProfessionalsSection";
import LastArticlesSection from "../components/LastArticlesSection";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <About />
      <HowItWorks />
      <JoinFixiSection />
      <StatsSection />
      <ProfessionalsSection />
      <LastArticlesSection />
    </div>
  );
};

export default HomePage;
