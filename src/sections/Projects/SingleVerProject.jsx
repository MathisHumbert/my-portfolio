import { useRef, useEffect } from 'react';
import useOnScreen from '../../utils/useOnScreen';
import styled from 'styled-components';
import { FaLink, FaGithub } from 'react-icons/fa';

const SingleVerProject = ({
  id,
  title,
  subtitle,
  tech,
  category,
  src,
  handleCounter,
  code,
  website,
}) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      handleCounter(id);
    }
  }, [onScreen, id]);

  return (
    <Wrapper
      className={
        onScreen ? 'single-project-ver is-reveal' : 'single-project-ver'
      }
      ref={ref}
    >
      <div className='info'>
        <h1 className='info-title'>{title}</h1>
        <h2 className='info-subtitle'>{subtitle}</h2>
        <p className='info-tech'>{tech}</p>
        <p className='info-category'>{category}</p>
      </div>
      <div className='image' style={{ backgroundImage: `url(${src})` }}></div>
      <div className='link'>
        <a href={website} className='website-link'>
          <FaLink className='link-icon' />
          Voir le résultat du projet
        </a>
        <a href={code} className='code-link'>
          <FaGithub className='link-icon' />
          Voir le code du projet
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  .info {
    z-index: 1;
    color: var(--grey-color);

    &-title {
      font-size: 6vw;
      line-height: 6vw;
      font-family: var(--font-bai);
      font-weight: 600;
    }

    &-subtitle {
      font-size: 6vw;
      line-height: 6vw;
      color: transparent;
      font-family: var(--font-bodo);
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke: 2px var(--grey-color);
    }

    &-category,
    &-tech {
      font-size: 4vw;
      line-height: 4vw;
      font-family: var(--font-bai);
      font-weight: 400px;
      margin-top: 2vh;
    }

    &-category {
      margin-top: 10px;
    }
  }

  .link {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  .link-icon {
    font-size: 20px;
  }

  .image {
    aspect-ratio: 2 / 3;
    height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    transform-origin: center;
    margin: 48px 0;
    transform: scale(0.7);
    transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
    filter: grayscale(100%) sepia(20%) brightness(80%);
  }

  &.is-reveal {
    .image {
      transform: scale(1);
      filter: none;
    }

    .project-link {
      transform: rotate(-90deg) scale(1);
      filter: none;
    }
  }

  .website-link,
  .code-link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--grey-color);
    text-decoration: none;
    font-size: 4vw;
    line-height: 4vw;
    font-family: var(--font-bai);
    font-weight: 400px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
export default SingleVerProject;
