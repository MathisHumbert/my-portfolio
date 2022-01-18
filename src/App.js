import { useState, useRef, useEffect } from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import Header from './sections/Header';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Navbar from './sections/Navbar';

const App = () => {
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
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
