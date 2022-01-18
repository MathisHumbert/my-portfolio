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
      <div className='image'>
        <div className='image-bcg'></div>
        <img src={src} alt={title} />
        <div className='link'>
          <a href={website} className='website-link'>
            <FaLink className='link-icon' />
            lien du projet
          </a>
          <a href={code} className='code-link'>
            <FaGithub className='link-icon' />
            lien du code
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  padding-top: 100px;

  &:last-child {
    padding-bottom: 100px;
  }

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
    margin: 48px 0;
    height: 50vh;
    width: 100%;

    position: relative;
    cursor: pointer;

    img {
      aspect-ratio: 2 / 3;
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: 1;
      transform: scale(0.7);
      transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
      filter: grayscale(100%) sepia(20%) brightness(80%);
    }

    &:hover {
      .image-bcg {
        z-index: 5;
        opacity: 1;
      }

      .link {
        z-index: 6;
        opacity: 1;
      }
    }
  }

  .image-bcg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.4s ease, z-index 0.4s ease;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0;
  }

  .website-link,
  .code-link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--light-grey-color);
    text-decoration: none;
    font-size: 4vw;
    line-height: 4vw;
    font-family: var(--font-bai);
    font-weight: 400px;
    transition: color 0.4 ease;

    &:hover {
      color: white;
    }
  }

  &.is-reveal {
    .image {
      img {
        transform: scale(1);
        filter: none;
      }
    }

    .project-link {
      transform: rotate(-90deg) scale(1);
      filter: none;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
export default SingleVerProject;
