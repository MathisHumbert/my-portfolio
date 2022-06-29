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
      markers: true,
    },
  });
};

export const slideInTitle = (elem) => {
  const timelineIn = gsap.timeline({ delay: 0.5 });

  timelineIn.set(elem, { autoAlpha: 1 });

  elem.forEach((line, index) => {
    timelineIn.fromTo(
      line,
      {
        y: '100%',
      },
      {
        duration: 1.5,
        delay: index * 0.2,
        ease: 'expo.out',
        y: '0%',
      },
      0
    );
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
    {
      opacity: 0,
      y: '200%',
    },
    {
      duration: 1,
      opacity: 1,
      y: 0,
      delai: 0.4,
      scrollTrigger: {
        trigger: trig,
        start: 'top center',
        end: 'bottom center',
      },
    }
  );
};
