import "./globals.css";
import Navbar from "./components/navbar";
import CardContainer from "./components/card";
import { Twobutton } from "./components/button";
import Multycards from "./components/multycards";
import { CertificationSection } from "./components/twoimage";
import Largevidcard from "./components/largevidocard";
import Multyvidcard from "./components/multyvidcards";
import Timeline from "./components/timeline";
import Aboutimg from "./components/aboutimage";
import Joblistnurse from "./components/joblistnurse";
import FAQSection from "./components/faqsection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CardContainer />
      <Twobutton />
      <Multycards />
      <CertificationSection />
      <Largevidcard />
      <Multyvidcard />
      <Timeline />
      <Aboutimg />
      <Joblistnurse />
      <FAQSection />
    </div>
  );
};

export default Home;
