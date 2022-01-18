import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { navData } from '../../utils/data';

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
  return (
    <Wrapper>
      <h1>
        {t('dev_top')} <br /> {t('dev_bottom')}
      </h1>
      <ul>
        {navData.map((item) => {
          const { id, title } = item;
          return (
            <div className={`link ${title}`}>
              <li
                key={id}
                className='scroll-link '
                onClick={() => handleScroll(title)}
              >
                <span>0{id} / </span>
                {t(title)}
              </li>

              <li
                key={id}
                className='scroll-link'
                onClick={() => handleScroll(title)}
              >
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
