import { useEffect, useState } from 'react';

import About from '../components/home/About';
import Contact from '../components/home/Contact';
import Header from '../components/home/Header';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';
import Navbar from '../components/home/Navbar';
import Experience from '../components/home/Experience';
import Preloader from '../components/shared/Preloader';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  if (loading) {
    return <Preloader title='mathis humbert' text='portfolio' />;
  }
  return (
    <>
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
