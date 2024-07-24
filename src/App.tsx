import ContactBlock from "./components/ContactBlock";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import ProjectBlock from "./components/ProjectBlock";
import SkillBlock from "./components/SkillBlock";
import { GlobalStyles } from "./styles.global";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Navbar />
      <Hero />
      <ProjectBlock />
      <SkillBlock />
      <ContactBlock />
      <Footer />
    </>
  );
};

export default App;
