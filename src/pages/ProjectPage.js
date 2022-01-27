import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../utils/projectData';
import Header from '../ProjectSections/Header';
import Content from '../ProjectSections/Content';
import BackHome from '../ProjectSections/BackHome';

const ProjectPage = () => {
  const [preloader, setPreload] = useState(true);
  const [timer, setTimer] = useState(1);

  const time = useRef(null);

  const clear = () => {
    window.clearInterval(time.current);
    setPreload(false);
  };

  useEffect(() => {
    time.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  let { id } = useParams();
  id = Number(id) - 1;
  const tempData = data[id];

  if (preloader) {
    return (
      <div className='loader-wrapper absolute'>
        <h1>project {id + 1}</h1>
        <h2>{tempData.title}</h2>
      </div>
    );
  }

  return (
    <Wrapper className='section'>
      <BackHome />
      <Header {...tempData} />
      <img src={tempData.img} alt='' />
      <Content {...tempData} />
      <section></section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  img {
    padding: 25px 0;
    width: 100%;
  }
`;
export default ProjectPage;
