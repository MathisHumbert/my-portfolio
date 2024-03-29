import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import data from '../utils/projectData';
import Header from '../components/project/Header';
import Content from '../components/project/Content';
import BackHome from '../components/project/BackHome';
import Preloader from '../components/shared/Preloader';

const ProjectPage = () => {
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  id = Number(id) - 1;
  const projectData = data[id];

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [id]);

  if (loading) {
    return <Preloader title={`project ${id + 1}`} text={projectData.title} />;
  }

  return (
    <Wrapper className='section'>
      <BackHome />
      <Header {...projectData} />
      <img src={projectData.img} alt={projectData.title} />
      <Content {...projectData} />
    </Wrapper>
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
