import { useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { projectsData } from '../../utils/data';
import SingleHorProject from './SingleHorProject';

gsap.registerPlugin(ScrollTrigger);

const SingleProject = ({
  id,
  title,
  subtitle,
  tech,
  category,
  src,
  handleCounter,
}) => {};

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
      {projectsData.map((project) => {
        return (
          <SingleHorProject
            key={project.id}
            {...project}
            handleCounter={handleCounter}
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

  @media (min-width: 768px) {
    display: flex;
  }
`;
export default HorProjects;
