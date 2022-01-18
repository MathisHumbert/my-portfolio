import { useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { projectsData } from '../../utils/data';
import SingleHorProject from './SingleHorProject';

gsap.registerPlugin(ScrollTrigger);

let scrollHorizontal = (elem, container) => {
  gsap.to(elem, {
    xPercent: -100 * (elem.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: true,
      markers: true,

      end: () => `+=${container.offsetWidth}`,
    },
  });
};

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
    color: #dbd8d6;

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
