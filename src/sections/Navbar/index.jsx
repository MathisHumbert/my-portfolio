import { useState } from 'react';
import styled from 'styled-components';
import i18next from 'i18next';

const Navbar = () => {
  const localLanguage = localStorage.getItem('i18nextLng') || 'fr';
  const [language, setLanguage] = useState(localLanguage);

  const handleLanguage = (lg) => {
    i18next.changeLanguage(lg);
    setLanguage(lg);
  };

  return (
    <Wrapper id='intro'>
      <h4>
        <span
          onClick={() => handleLanguage('fr')}
          className={language === 'fr' ? 'active' : null}
        >
          fr
        </span>
        <span> / </span>
        <span
          onClick={() => handleLanguage('en')}
          className={language === 'en' ? 'active' : null}
        >
          en
        </span>
      </h4>
      <a
        href='https://twitter.com/Mathis1Humbert'
        target='_blank'
        rel='noreferrer'
      >
        <h4>mathis humbert</h4>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px 5vw;
  text-transform: uppercase;

  h4,
  a {
    font-family: var(--font-bai);
    font-weight: 600;
    font-size: 20px;
    color: var(--dark-color-4);
    text-decoration: none;
  }

  @media (min-width: 1000px) {
    padding: 50px 5vw;

    h4 {
      font-size: 24px;
    }
  }
`;
export default Navbar;
