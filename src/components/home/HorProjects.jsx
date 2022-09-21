import { useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { scrollHorizontal } from '../../utils/gsapActions';
import { projectsData } from '../../utils/data';
import SingleHorProject from './SingleHorProject';

const HorProjects = () => {
  const [counter, setCounter] = useState(1);
  const handleCounter = (id) => setCounter(id);

  useEffect(() => {
    let sections = gsap.utils.toArray('.single-project-hor');
    let container = document.querySelector('.horizontal-container');
    scrollHorizontal(sections, container);
  }, []);

  return (
    <Wrapper className='horizontal-container'>
      <div className='project-counter'>
        <span>0{counter}</span>
        <span className='divider' />
        <span>03</span>
      </div>
      {projectsData.map((project) => {
        return (
          <SingleHorProject
            key={project.id}
            {...project}
            handleCounter={handleCounter}
            counter={counter}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--dark-color-2);
  display: none;
  flex-wrap: nowrap;
  height: 80vh;
  padding: 10vh 0;
  width: 300%;
  position: relative;

  .project-counter {
    position: absolute;
    left: 100px;
    top: 10%;
    z-index: 10;
    mix-blend-mode: difference;
    font-size: 16px;
    line-height: 16px;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    color: var(--light-grey-color);

    .divider {
      content: '';
      background-color: white;
      width: 6.25vw;
      margin: 7px 10px;
      height: 1px;
      display: inline-block;
    }
  }

  @media (min-width: 1000px) {
    display: flex;
  }
`;
export default HorProjects;
