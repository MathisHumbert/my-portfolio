import { useState } from 'react';
import styled from 'styled-components';
import HorProjects from './HorProjects';
import VerProjects from './VerProjects';

const Projects = () => {
  return (
    <Wrapper>
      <HorProjects />
      <VerProjects />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  height: 100%;
`;
export default Projects;
