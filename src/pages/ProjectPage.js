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
    <Wrapper>
      <BackHome />
      <Header {...tempData} />
      <img src={tempData.img} alt='' />
      <Content {...tempData} />
      <section></section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--light-grey-color);
    text-decoration: none;
    font-size: 4vw;
    line-height: 4vw;
    font-family: var(--font-bai);
    font-weight: 400px;
    transition: color 0.4s ease;

    &:hover {
      color: white;
    }
  }

  img {
    width: 100%;
  }
`;
export default ProjectPage;
