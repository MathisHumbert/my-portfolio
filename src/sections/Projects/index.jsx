import { useState } from 'react';
import styled from 'styled-components';
import HorProjects from './HorProjects';
import VerProjects from './VerProjects';
import SectionHeader from '../../components/SectionHeader';

const Projects = () => {
  return (
    <Wrapper>
      <SectionHeader title='projets' marginLeft='5vw' />
      <HorProjects />
      <VerProjects />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  height: 100%;

  .header {
    margin-left: 5vw;
  }
  @media (min-width: 1000px) {
    padding: 100px 0;
  }
`;
export default Projects;
