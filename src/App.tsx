import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "./styles.global";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
