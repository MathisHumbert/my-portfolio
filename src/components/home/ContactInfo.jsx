import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { footerData } from '../../utils/data';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ul>
        {footerData.map((item) => {
          const { id, url, logo } = item;
          return (
            <li key={id}>
              <a href={url} target='_blank' rel='noreferrer'>
                {logo}
              </a>
            </li>
          );
        })}
      </ul>
      <div>
        <h4>{t('created')}</h4>
        <h3>mathis humbert</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  border-top: 1px solid var(--dark-color-1);
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  li {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(30, 30, 47, 0.1);
    border-radius: 50%;
    line-height: 0;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #222;

      a {
        color: #fff;
      }
    }
  }

  a {
    font-size: 22px;
    color: #222;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    line-height: 0;
    transition: color 0.3s ease;
  }

  h4 {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: 'Syncopate', sans-serif;
    color: #626262;
  }

  h3 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: var(--font-bai);
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    padding-top: 75px;

    li {
      width: 60px;
      height: 60px;
    }

    a {
      font-size: 30px;
    }

    h4 {
      font-size: 18px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

export default ContactInfo;
