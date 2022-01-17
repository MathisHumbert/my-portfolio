import styled from 'styled-components';
import { projectsData } from '../../utils/data';
import SingleVerProject from './SingleVerProject';

const VerProjects = () => {
  return (
    <Wrapper className='vertical-container'>
      {projectsData.map((project) => {
        return <SingleVerProject key={project.id} {...project} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--dark-color-2);
  height: 100%;
  padding-left: 5vw;
  padding-right: 5vw;
`;
export default VerProjects;
