import { useState } from 'react';
import styled from 'styled-components';
import {
  frontEndData,
  backEndData,
  skillsHeaderData,
  globalSkillsData,
} from '../../utils/data';
import SingleSkill from './SingleSkill';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(1);
  return (
    <Wrapper>
      <header>
        {skillsHeaderData.map((item) => {
          const { id, title } = item;
          return (
            <h3
              key={id}
              className={
                activeSkill === id ? 'active skill-header' : 'skill-header'
              }
              onClick={() => setActiveSkill(id)}
            >
              <span>0{id} / </span>
              {title}
            </h3>
          );
        })}
      </header>
      <div>
        <SingleSkill data={frontEndData} active={activeSkill} index={1} />
        <SingleSkill data={backEndData} active={activeSkill} index={2} />
        <SingleSkill data={globalSkillsData} active={activeSkill} index={3} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  header {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .skill-header {
      font-size: 14px;
      font-family: var(--font-synco);
      font-weight: 600;
      text-transform: uppercase;
      opacity: 0.5;
      cursor: pointer;
      transition: opacity 0.2s ease-in-out;

      span {
        font-family: var(--font-bai);
      }

      &:hover {
        opacity: 1;
      }

      &.active {
        opacity: 1;
      }
    }
  }
`;
export default Skills;
