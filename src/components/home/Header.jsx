import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { navData } from '../../utils/data';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <h1 id='header-title'>{t('dev')}</h1>
      <ul>
        {navData.map((item) => {
          const { id, title } = item;
          return (
            <li key={id}>
              <a href={`#${title}`}>
                <span>0{id} / </span>
                {t(title)}
              </a>
              <a href={`#${title}`}>
                <span>0{id} / </span>
                {t(title)}
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  text-transform: uppercase;
  height: 100%;
  padding: 0 5vw;

  h1 {
    padding-top: 50px;
    font-family: var(--font-bai);
    font-size: 12vw;
    font-weight: 600;
    text-align: center;
  }

  ul {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li {
    position: relative;
    overflow: hidden;
    height: 18px;
    width: 202px;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      a {
        transform: translateY(120%);

        &:last-child {
          transform: translateY(0);
        }
      }
    }
  }

  a {
    width: fit-content;
    position: absolute;
    font-size: 16px;
    font-family: var(--font-synco);
    font-weight: 600;
    color: var(--dark-grey-color);
    transition: transform 0.4s ease;
    text-decoration: none;

    &:last-child {
      transform: translateY(-120%);
      color: #222;
    }

    span {
      font-family: var(--font-bai);
    }
  }

  .lineParent {
    overflow: hidden;
    .lineChildren {
      transform: translate(0, 500px);
    }
  }

  @media (min-width: 1000px) {
    a {
      font-size: 20px;
    }

    li {
      width: 253px;
    }
  }
`;

export default Header;
