import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaLink, FaGithub } from 'react-icons/fa';

const Header = ({ title, website, code }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <h1>{title}</h1>
      <a
        href={website}
        target='_blank'
        rel='noreferrer'
        className='website-link link'
      >
        {t('website')} <FaLink />
      </a>
      <a
        href={code}
        target='_blank'
        rel='noreferrer'
        className='code-link link'
      >
        {t('code')} <FaGithub />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 25px 0;

  h1 {
    font-family: var(--font-bai);
    font-size: 8vw;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--dark-grey-color);
    text-decoration: none;
    font-size: 18px;
    line-height: 18px;
    font-family: var(--font-bai);
    font-weight: 400px;
    transition: color 0.4s ease;

    &:hover {
      color: var(--black-color);
    }
  }

  .website-link {
    margin-bottom: 8px;
  }

  @media (min-width: 1000px) {
    h1 {
      font-size: 60px;
    }

    .link {
      font-size: 20px;
      line-height: 20px;
    }
  }
`;
export default Header;
