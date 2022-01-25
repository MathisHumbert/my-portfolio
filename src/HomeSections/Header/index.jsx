import { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { navData } from '../../utils/data';
import { slideInTitle } from '../../utils/gsapActions';
import SplitText from '../../utils/Split3.min';

const Header = () => {
  const { t } = useTranslation();

  const handleScroll = (to) => {
    const el = document.getElementById(to);
    let position = el.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });
  };

  useEffect(() => {
    const split = new SplitText('#header-title', {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    new SplitText('#header-title', {
      type: 'lines',
      linesClass: 'lineParent',
    });

    slideInTitle(split.lines);
  }, []);

  return (
    <Wrapper>
      <h1 id='header-title'>{t('dev')}</h1>
      <ul>
        {navData.map((item) => {
          const { id, title } = item;
          return (
            <div className={`link ${title}`} key={id}>
              <li className='scroll-link ' onClick={() => handleScroll(title)}>
                <span>0{id} / </span>
                {t(title)}
              </li>

              <li className='scroll-link' onClick={() => handleScroll(title)}>
                <span>0{id} / </span>
                {t(title)}
              </li>
            </div>
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

  .link {
    position: relative;
    overflow: hidden;
    height: 18px;
    width: 202px;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      li {
        transform: translateY(120%);

        &:last-child {
          transform: translateY(0);
        }
      }
    }
  }

  li {
    width: fit-content;
    position: absolute;
    font-size: 16px;
    font-family: var(--font-synco);
    font-weight: 600;
    color: var(--dark-grey-color);
    transition: transform 0.4s ease;

    &:last-child {
      transform: translateY(-120%);
      color: #222;
    }

    span {
      font-family: var(--font-bai);
    }
  }

  .special-li {
    position: relative;
    opacity: 0;
  }

  .lineParent {
    overflow: hidden;
    .lineChildren {
      transform: translate(0, 500px);
    }
  }

  @media (min-width: 1000px) {
    li {
      font-size: 20px;
    }

    .link {
      width: 253px;
    }
  }
`;

export default Header;