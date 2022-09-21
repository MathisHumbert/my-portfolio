import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

import { split } from '../../utils/text';
import { navData } from '../../utils/data';
import { useEffect } from 'react';

const Header = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const header = document.querySelector('#header-title');

    split({
      element: header,
    });
    split({
      element: header,
    });

    const elementLinesSpans = header.querySelectorAll('span span');

    const animateOut = gsap.timeline({ delay: 0.2 });

    gsap.fromTo(
      header,
      {
        opacity: 0,
      },
      { opacity: 1 }
    );

    animateOut.fromTo(
      elementLinesSpans,
      {
        y: '100%',
      },
      {
        duration: 1.5,
        ease: 'expo.out',
        y: '0%',
      }
    );
  }, []);

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
    display: inline-block;
    opacity: 0;

    span {
      display: inline-block;
      overflow: hidden;
      vertical-align: top;
    }
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
      color: var(--black-color);
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
