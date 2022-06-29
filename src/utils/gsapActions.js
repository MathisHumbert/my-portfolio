import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollHorizontal = (elem, container) => {
  gsap.to(elem, {
    xPercent: -100 * (elem.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: true,
      end: () => `+=${container.offsetWidth}`,
    },
  });
};

export const slideInPreloader = (elemTitle, elemText) => {
  const animateOut = gsap.timeline({ delay: 2 });

  animateOut.to(elemTitle, {
    duration: 1.5,
    ease: 'expo.out',
    y: '100%',
    stagger: 0.1,
  });

  animateOut.to(
    elemText,
    {
      duration: 1.5,
      ease: 'expo.out',
      y: '100%',
      stagger: 0.1,
    },
    '-=1.4'
  );

  animateOut.to('.preloader', {
    duration: 1.5,
    ease: 'expo.out',
    scaleY: 0,
    transformOrigin: '100% 100%',
  });
};

export const slideImageTop = (elem, trig) => {
  gsap.fromTo(
    elem,
    {
      clipPath: 'inset(100% 0% 0% 0%)',
    },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1,

      scrollTrigger: {
        trigger: trig,
        start: 'top center',
        end: 'bottom center',
      },
    }
  );
};

export const slideElemTop = (elem, trig) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: '100%',
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,

      scrollTrigger: {
        trigger: trig,
        start: 'top center',
        end: 'bottom center',
      },
    }
  );
};

export const slideTextTop = (elem, trig) => {
  gsap.fromTo(
    elem,
    { autoAlpha: 0, delay: 1 },
    {
      autoAlpha: 1,
      duration: 2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: trig,
        start: 'top center',
        end: 'bottom center',
      },
    }
  );
};
