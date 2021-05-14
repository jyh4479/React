import TopNavigation from "./Components/TopNavigation/TopNavigation";
import HomeSection from "./Components/HomeSection/HomeSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import FeatureSection from "./Components/FeatureSection/FeatureSection";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import TeamSection from "./Components/TeamSection/TeamSection";
import ChooseSection from "./Components/ChooseSection/ChooseSection";
import PortfolioSection from "./Components/ProtfolioSection/PortfolioSection";
import Footer from "./Components/Footer/Footer";
import TestSection from "./Components/TestSection/TestSection";
import Loading from "./Components/Loading/Loading";

import QuickMenu from "./Components/QuickMenu/QuickMenu";

function App() {
  return (
      <>
          <Loading></Loading>
          <div className="culmn"> {/* App에서 부트스에서 사용하는 culmn class로 변경 */}
              <TopNavigation></TopNavigation>
              <HomeSection></HomeSection>
              <AboutSection></AboutSection>
              <FeatureSection></FeatureSection>
              <TeamSection></TeamSection> {/* JSX는 style을 줄때 형식이 있음 ex {{~~~:"~~~"}}*/}
              <ServiceSection></ServiceSection>
              <ChooseSection></ChooseSection>
              <PortfolioSection></PortfolioSection>
              {/*<TestSection></TestSection>*/}
              <Footer></Footer>

              {/*<QuickMenu></QuickMenu>*/}
              {/*기능추가 예정*/}

          </div>
      </>
  );
}

export default App;
