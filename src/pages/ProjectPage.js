import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Wrapper>
      <h1>Under Construction</h1>
      <Link to='/'>back home</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1,
  a {
    color: var(--dark-color-2);
    text-align: center;
    font-size: 4vw;
    margin-top: 2rem;
    font-weight: 600;
  }

  a {
    display: block;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export default ProjectPage;
