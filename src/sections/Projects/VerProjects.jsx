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
  background-color: #d53f41;
  height: 100%;
  width: 100%;
`;
export default VerProjects;
