import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import SectionHeader from '../shared/SectionHeader';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Wrapper className='section' id='experience'>
      <SectionHeader title='experience' />
      <h1>{t('dev')}</h1>
      <img src='./assets/cyclofix-logo.png' alt='cyclofix' />
      <h3>2022 - Paris</h3>
      <p>{t('experience1')}</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    font-size: 6vw;
    line-height: 6vw;
    font-family: var(--font-bai);
    font-weight: 600;
    text-transform: capitalize;
  }

  img {
    display: block;
    width: 130px;
    height: 28px;
    object-fit: cover;
    margin: 2vw 0;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 2vw;
    color: var(--dark-grey-color);
  }

  p {
    font-size: 18px;
    line-height: 1.4;
  }

  @media (min-width: 1000px) {
    .content {
      grid-template-columns: 1fr 3fr;
      align-items: center;
    }

    p {
      font-size: 26px;
    }

    h3 {
      font-size: 18px;
    }

    img {
      width: 150px;
      height: 32px;
    }
  }
`;

export default Experience;
