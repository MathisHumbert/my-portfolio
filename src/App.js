import About from './sections/About';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Navbar from './sections/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
