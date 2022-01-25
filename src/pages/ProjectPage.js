import { useParams } from 'react-router-dom';
import { FaLink, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import data from '../utils/projectData';

const ProjectPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const tempData = data[0];
  console.log(tempData);
  const { title, website, code, img, header } = tempData;

  return (
    <Wrapper>
      <header>
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
      </header>
      <img src={img} alt='' />
      <section></section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--light-grey-color);
    text-decoration: none;
    font-size: 4vw;
    line-height: 4vw;
    font-family: var(--font-bai);
    font-weight: 400px;
    transition: color 0.4s ease;

    &:hover {
      color: white;
    }
  }

  img {
    width: 100%;
  }
`;
export default ProjectPage;
