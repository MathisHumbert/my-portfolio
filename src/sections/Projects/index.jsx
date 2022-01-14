import { useState } from 'react';
import styled from 'styled-components';

const Projects = () => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    let sections = gsap.utils.toArray('.single-project');
    let container = document.querySelector('.horizontal-container');
    console.log(sections, container);
    // scrollHorizontal(sections, container);
  }, []);

  const handleCounter = (id) => setCounter(id);
  return <div></div>;
};

const Wrapper = styled.section`
  background-color: #d53f41;
  margin-left: -5vw;
  margin-right: -5vw;
  height: 80vh;
  padding: 10vh 0;
  width: 300%;
  display: flex;
  flex-wrap: nowrap;
`;
export default Projects;
