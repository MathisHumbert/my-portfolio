import About from '../components/home/About';
import Contact from '../components/home/Contact';
import Header from '../components/home/Header';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';
import Navbar from '../components/home/Navbar';
import Experience from '../components/home/Experience';
import Preloader from '../components/shared/Preloader';

const HomePage = () => {
  return (
    <>
      <Preloader title='mathis humbert' text='portfolio' />
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;
