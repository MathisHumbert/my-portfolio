import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../utils/projectData';
import Header from '../ProjectSections/Header';
import Content from '../ProjectSections/Content';
import BackHome from '../ProjectSections/BackHome';

// back home
// projet number 1
// header
// img
// content

const ProjectPage = () => {
  const { id } = useParams();
  const tempData = data[0];
  console.log(tempData);

  return (
    <Wrapper className='section'>
      <BackHome />
      <Header {...tempData} />
      <img src={tempData.img} alt='' />
      <Content {...tempData} />
      <section></section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    padding: 25px 0;
    width: 100%;
  }
`;
export default ProjectPage;
