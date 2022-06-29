import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import data from '../utils/projectData';
import Header from '../components/project/Header';
import Content from '../components/project/Content';
import BackHome from '../components/project/BackHome';
import Preloader from '../components/shared/Preloader';

const ProjectPage = () => {
  let { id } = useParams();
  id = Number(id) - 1;
  const tempData = data[id];

  return (
    <>
      <Preloader title={`project ${id + 1}`} text={tempData.title} />
      <Wrapper className='section'>
        <BackHome />
        <Header {...tempData} />
        <img src={tempData.img} alt='' />
        <Content {...tempData} />
        <section></section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  img {
    padding: 25px 0;
    width: 100%;
  }
`;
export default ProjectPage;
