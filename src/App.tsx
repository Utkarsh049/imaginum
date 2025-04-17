import Hero from "./components/Hero";
import Herobg from "./components/Herobg";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Herobg />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
