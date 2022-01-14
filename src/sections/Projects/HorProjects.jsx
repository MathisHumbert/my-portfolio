import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let scrollHorizontal = (elem, container) => {
  gsap.to(elem, {
    xPercent: -100 * (elem.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: true,
      markers: true,

      end: () => `+=${container.offsetWidth}`,
    },
  });
};

const projects = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100',
    title: 'Dracaena Trifasciata',
    subtitle: 'Live the Beauty',
    category: 'Shooting / Adv.Campaing',
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

const HorProjects = () => {
  // useEffect(() => {
  //   let sections = gsap.utils.toArray('.single-project');
  //   let container = document.querySelector('.horizontal-container');
  //   console.log(sections, container);
  //   // scrollHorizontal(sections, container);
  // }, []);

  return (
    <Wrapper className='horizontal-container'>
      {projects.map((project) => {
        const { title, subtitle, category, src, id } = project;
        return (
          <article key={id} className='single-project'>
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
  .single-project {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 20vw 1fr 100px;
    /* grid-template-columns: 100px 1fr 100px; */
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

  .image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform-origin: center;
  }
`;
export default HorProjects;
