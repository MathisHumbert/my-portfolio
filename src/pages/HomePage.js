import { useState, useRef, useEffect } from 'react';
import About from '../HomeSections/About';
import Contact from '../HomeSections/Contact';
import Header from '../HomeSections/Header';
import Projects from '../HomeSections/Projects';
import Skills from '../HomeSections/Skills';
import Navbar from '../HomeSections/Navbar';
import Experience from '../HomeSections/Experience';

const HomePage = () => {
  const [preloader, setPreload] = useState(true);
  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (preloader) {
    return (
      <div className='loader-wrapper absolute'>
        <h1>mathis humbert</h1>
        <h2>portfolio</h2>
      </div>
    );
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
