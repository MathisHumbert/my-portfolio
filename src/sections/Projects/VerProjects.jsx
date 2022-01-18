import { useState } from 'react';
import styled from 'styled-components';
import { projectsData } from '../../utils/data';
import SingleVerProject from './SingleVerProject';

const VerProjects = () => {
  const [counter, setCounter] = useState(1);
  const handleCounter = (id) => setCounter(id);

  return (
    <Wrapper className='vertical-container'>
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

  @media (min-width: 1000px) {
    display: none;
  }
`;
export default VerProjects;
