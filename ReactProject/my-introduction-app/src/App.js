import TopNavigation from "./Components/TopNavigation/TopNavigation";
import HomeSection from "./Components/HomeSection/HomeSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import FeatureSection from "./Components/FeatureSection/FeatureSection";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import TeamSection from "./Components/TeamSection/TeamSection";
import ChooseSection from "./Components/ChooseSection/ChooseSection";
import PortfolioSection from "./Components/ProtfolioSection/PortfolioSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <TopNavigation></TopNavigation>
        <HomeSection></HomeSection>
        <AboutSection></AboutSection>
        <FeatureSection></FeatureSection>
        <ServiceSection></ServiceSection>
        {/* <TeamSection></TeamSection> 오류찾기 */}
        <ChooseSection></ChooseSection>
        {/* <PortfolioSection></PortfolioSection> 오류찾기 */}
        <Footer></Footer>
    </div>
  );
}

export default App;
