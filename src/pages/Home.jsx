import { useState, useRef, useEffect } from 'react';

import About from '../components/home/About';
import Contact from '../components/home/Contact';
import Header from '../components/home/Header';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';
import Navbar from '../components/home/Navbar';
import Experience from '../components/home/Experience';

const HomePage = () => {
  const [preloader, setPreload] = useState(true);
  const [timer, setTimer] = useState(1);

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
