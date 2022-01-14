import styled from 'styled-components';

const SingleProject = ({ src, category, subtitle, title }) => {
  return (
    <Article className='single-project'>
      <div />
      <div className='project-item'>
        <div className='info'>
          <h1 className='info-title'>{title}</h1>
          <h2 className='info-subtitle'>{subtitle}</h2>
          <p className='info-category'>{category}</p>
        </div>
        <div className='image' style={{ backgroundImage: `url(${src})` }}></div>
      </div>
    </Article>
  );
};

const Article = styled.article`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 20vw 1fr 100px;
  /* grid-template-columns: 100px 1fr 100px; */

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
    color: #dbd8d6;

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
      -webkit-text-stroke: 2px #dbd8d6;
    }

    &-category {
      font-size: 24px;
      line-height: 24px;
      font-family: var(--font-bai);
      font-weight: 400px;
      margin-top: 2vh;
    }
  }

  .image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform-origin: center;
  }
`;

export default SingleProject;
