import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { projectsData } from '../../utils/data';

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

const HorProjects = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray('.single-project-hor');
    let container = document.querySelector('.horizontal-container');
    console.log(sections, container);
    scrollHorizontal(sections, container);
  }, []);

  return (
    <Wrapper className='horizontal-container'>
      {projectsData.map((project) => {
        const { title, subtitle, category, src, id, tech } = project;
        return (
          <article key={id} className='single-project-hor'>
            <div></div>
            <div className='project-item'>
              <div className='info'>
                <h1 className='info-title'>{title}</h1>
                <h2 className='info-subtitle'>{subtitle}</h2>
                <p className='info-tech'>{tech}</p>
                <p className='info-category'>{category}</p>
              </div>
              <a href='#' className='project-link'>
                learn more
              </a>
              <div
                className='image'
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            </div>
            <div></div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #d53f41;
  display: none;
  flex-wrap: nowrap;
  height: 80vh;
  padding: 10vh 0;
  width: 300%;
  position: relative;

  .single-project-hor {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20vw 1fr 200px;
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

  .project-link {
    position: absolute;
    bottom: 10vh;
    right: -40px;
    transform: rotate(-90deg);
    transform-origin: right bottom;
    font-size: 24px;
    color: var(--light-grey-color);
    text-decoration: none;
  }

  .image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform-origin: center;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;
export default HorProjects;
