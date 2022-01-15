import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useOnScreen from '../../utils/useOnScreen';

const SingleHorProject = ({
  id,
  title,
  subtitle,
  tech,
  category,
  src,
  handleCounter,
}) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    console.log(onScreen);
    if (onScreen) {
      handleCounter(id);
    }
  }, [onScreen, id]);
  return (
    <Wrapper
      key={id}
      className={
        onScreen ? 'single-project-hor is-reveal' : 'single-project-hor'
      }
      ref={ref}
    >
      <div></div>
      <div className='project-item'>
        <div className='info'>
          <h1 className='info-title'>{title}</h1>
          <h2 className='info-subtitle'>{subtitle}</h2>
          <p className='info-tech'>{tech}</p>
          <p className='info-category'>{category}</p>
        </div>
        <div className='image' style={{ backgroundImage: `url(${src})` }}>
          <a href='#' className='project-link'>
            learn more
          </a>
        </div>
      </div>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20vw 1fr 200px;

  .project-item {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .info {
    position: absolute;
    bottom: 10%;
    z-index: 1;
    transform: translateX(-20%);
    color: var(--light-grey-color);

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
      -webkit-text-stroke: 2px var(--light-grey-color);
    }

    &-category,
    &-tech {
      font-size: 24px;
      line-height: 24px;
      font-family: var(--font-bai);
      font-weight: 400px;
      margin-top: 2vh;
    }

    &-category {
      margin-top: 10px;
    }
  }

  &.is-reveal {
    .image {
      transform: scale(1);
      filter: none;
    }
  }

  .image {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform-origin: center;
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

  .project-link {
    position: absolute;
    bottom: 10vh;
    right: -40px;
    transform: rotate(-90deg) scale(0.7);
    transform-origin: right bottom;
    font-size: 24px;
    color: var(--light-grey-color);
    text-decoration: none;
    transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
    filter: grayscale(100%) sepia(20%) brightness(80%);
  }
`;
export default SingleHorProject;