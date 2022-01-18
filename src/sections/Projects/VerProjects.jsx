import { useState } from 'react';
import styled from 'styled-components';
import { projectsData } from '../../utils/data';
import SingleVerProject from './SingleVerProject';

const VerProjects = () => {
  const [counter, setCounter] = useState(1);
  const handleCounter = (id) => setCounter(id);

  return (
    <Wrapper className='vertical-container'>
      <div className='project-counter'>
        <span>0{counter}</span>
        <span className='divider' />
        <span>03</span>
      </div>
      {projectsData.map((project) => {
        return (
          <SingleVerProject
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
  height: 100%;
  padding-left: 5vw;
  padding-right: 5vw;

  .project-counter {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    bottom: 100px;
    transform: translateX(-20px) rotate(90deg);
    transform-origin: left bottom;
    z-index: 10;
    mix-blend-mode: difference;
    font-size: 16px;
    line-height: 16px;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    color: #f5f0ec;

    .divider {
      content: '';
      background-color: #f5f0ec;
      width: 6.25vw;
      margin: 6px 10px;
      height: 1px;
      display: inline-block;
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;
export default VerProjects;
