import styled from 'styled-components';

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
  return (
    <Wrapper key={id} className='single-project-ver'>
      <div></div>
      <div className='project-item'>
        <div className='info'>
          <h1 className='info-title'>{title}</h1>
          <h2 className='info-subtitle'>{subtitle}</h2>
          <p className='info-category'>{category}</p>
        </div>
        <div className='image' style={{ backgroundImage: `url(${src})` }}></div>
      </div>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: grid;
  grid-template-rows: 100px 1fr 20px;
  position: relative;

  .project-item {
    width: 100%;
    height: 100%;
  }

  .info {
    z-index: 1;
    color: #dbd8d6;
    position: absolute;

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
    height: 100%;
    background-size: cover;
    background-position: center;
    transform-origin: center;
    border: 1px solid red;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
export default SingleVerProject;
