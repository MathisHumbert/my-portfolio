import styled from 'styled-components';

const projects = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100',
    title: 'MERN Invoice App',
    subtitle: 'Live the Beauty',
    category: 'Project / Frontend Mentor',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100',
    title: 'Cereus Penuvianus',
    subtitle: 'Live the Beauty',
    category: 'Shooting / Adv.Campaing',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100',
    title: 'Calliope',
    subtitle: 'Live the Beauty',
    category: 'Shooting / Adv.Campaing',
  },
];

const VerProjects = () => {
  return (
    <Wrapper className='vertical-container'>
      {projects.map((project) => {
        const { title, subtitle, category, src, id } = project;
        return (
          <article key={id} className='single-project-ver'>
            <div />
            <div className='project-item'>
              <div className='info'>
                <h1 className='info-title'>{title}</h1>
                <h2 className='info-subtitle'>{subtitle}</h2>
                <p className='info-category'>{category}</p>
              </div>
              <div
                className='image'
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #d53f41;
  height: 100%;
  width: 100%;

  .single-project-ver {
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 20vw 1fr 200px;
  }

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
  /* 
  .image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform-origin: center;
  } */

  @media (min-width: 768px) {
    display: none;
  }
`;
export default VerProjects;
