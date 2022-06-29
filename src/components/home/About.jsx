import { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import img from '../../assets/mathis.png';
import { slideImageTop, slideTextTop } from '../../utils/gsapActions';
import SectionHeader from '../shared/SectionHeader';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    slideImageTop('#about-img', '#about');
    slideTextTop('#about-text', '#about');
  }, []);

  return (
    <Wrapper className='section' id='about'>
      <SectionHeader title='about' />
      <div className='content'>
        <div className='left'>
          <h3>{t('me')}</h3>
          <img src={img} alt='mathis-img' id='about-img' />
        </div>
        <div className='right'>
          <p id='about-text'>{t('about_text')}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content {
    display: grid;
    gap: 5vw;
  }

  .left {
    display: grid;
    gap: 10px;
  }

  h3 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: 'Syncopate', sans-serif;
  }

  img {
    width: 100%;
    object-fit: cover;
    max-width: 500px;
  }

  p {
    font-size: 24px;
    line-height: 1.4;
  }

  @media (min-width: 1000px) {
    .content {
      grid-template-columns: 1fr 3fr;
      align-items: center;
    }

    p {
      font-size: 32px;
    }

    h3 {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1px;
      font-family: 'Syncopate', sans-serif;
    }
  }
  @media (min-width: 1440px) {
    p {
      font-size: 48px;
    }
  }
`;
export default About;
