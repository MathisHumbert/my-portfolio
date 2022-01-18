import styled from 'styled-components';
import { skillsData } from '../../utils/data';

const Header = ({ activeSkill, setActiveSkill }) => {
  return (
    <Wrapper>
      {skillsData.map((skill) => {
        return (
          <li
            key={skill.id}
            className={activeSkill === skill.id ? 'active' : null}
            onClick={() => setActiveSkill(skill.id)}
          >
            {skill.title}
            <span></span>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 25px;

  li {
    font-family: var(--font-bai);
    font-weight: 600;
    font-size: 16px;
    color: var(--dark-color-4);
    text-transform: uppercase;
    margin-top: 24px;
    cursor: pointer;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--dark-color-4);
      opacity: 0;
      transform: translateY(400%);
      transition: opacity 0.3s ease, transform 0.3s ease;
      margin-top: 3px;
    }

    &:hover span {
      opacity: 0.3;
      transform: translateY(0%);
    }

    &.active {
      span {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }

  @media (min-width: 1000px) {
    li {
      font-size: 18px;
    }

    gap: 20px;
    margin-bottom: 50px;
  }
`;
export default Header;
