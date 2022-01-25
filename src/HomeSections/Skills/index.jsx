import { useState } from 'react';
import styled from 'styled-components';
import SectionHeader from '../../components/SectionHeader';
import Header from './Header';
import Content from './Content';
import { frontEndData, backEndData, globalSkillsData } from '../../utils/data';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(1);

  return (
    <Wrapper className='section' id='skills'>
      <header>
        <SectionHeader title='skills' />
        <Header activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
      </header>
      <div className='skills-container'>
        <Content
          data={
            activeSkill === 1
              ? frontEndData
              : activeSkill === 2
              ? backEndData
              : globalSkillsData
          }
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .skills-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    width: 100%;
    gap: 25px 50px;
  }

  @media (min-width: 1000px) {
    .skills-container {
      grid-template-columns: repeat(3, 1fr);
      gap: 35px 50px;
    }
  }

  @media (min-width: 1440px) {
    .skills-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export default Skills;
