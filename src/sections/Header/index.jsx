import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { navData } from '../../utils/data';

const Header = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <h1>
        {t('dev_top')} <br /> {t('dev_bottom')}
      </h1>
      <ul>
        {navData.map((item) => {
          const { id, title } = item;
          return (
            <li key={id}>
              <span>0{id} / </span>
              {t(title)}
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
  /* padding-bottom: 195px; */
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
    font-size: 16px;
    font-family: var(--font-synco);
    font-weight: 600;
    color: var(--dark-grey-color);

    span {
      font-family: var(--font-bai);
    }
  }

  @media (min-width: 1000px) {
    li {
      font-size: 20px;
    }
  }
`;

export default Header;
