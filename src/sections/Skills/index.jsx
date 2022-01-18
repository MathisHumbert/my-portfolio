import { useState } from 'react';
import styled from 'styled-components';
import SectionHeader from '../../components/SectionHeader';
import SkillHeader from './SkillHeader';
import { frontEndData, backEndData, globalSkillsData } from '../../utils/data';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(1);

  return (
    <Wrapper className='section'>
      <header>
        <SectionHeader title='skills' />
        <SkillHeader
          activeSkill={activeSkill}
          setActiveSkill={setActiveSkill}
        />
      </header>
      <div className='skills-container'>
        {frontEndData.map((item) => {
          const { id, title, icon, color } = item;
          return (
            <article key={id}>
              <div className='logo'>
                <span style={{ color: `${color}` }}>{icon}</span>
              </div>
              <h3>{title}</h3>
              <p>6 months</p>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border: 1px solid red;

  .skills-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 0;
  }

  article {
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .logo {
    width: 130px;
    height: 145px;
    display: grid;
    place-items: center;
    font-size: 60px;
    background-color: white;
  }
`;
export default Skills;
