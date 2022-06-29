import styled from 'styled-components';
import HorProjects from './HorProjects';
import VerProjects from './VerProjects';
import SectionHeader from '../../components/SectionHeader';

const Projects = () => {
  return (
    <Wrapper id='projects'>
      <SectionHeader title='projects' marginLeft={true} />
      <div className='wrapper'>
        <HorProjects />
      </div>
      <VerProjects />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  height: 100%;

  .wrapper {
    background-color: var(--dark-color-2);
    padding: 10vh 0;
  }

  .header {
    margin-left: 5vw;
  }

  @media (min-width: 1000px) {
    padding: 100px 0;
  }
`;
export default Projects;
