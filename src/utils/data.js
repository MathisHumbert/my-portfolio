import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiRedux,
  SiStyledcomponents,
  SiReact,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiCodewars,
  SiFrontendmentor,
  SiTwitter,
  SiLinkedin,
  SiFreecodecamp,
  SiFigma,
  SiNextdotjs,
  SiFirebase,
  SiNpm,
} from 'react-icons/si';

import images from '../assets';

export const navData = [
  {
    id: 1,
    title: 'intro',
  },
  {
    id: 2,
    title: 'about',
  },
  {
    id: 3,
    title: 'experience',
  },
  {
    id: 4,
    title: 'projects',
  },
  {
    id: 5,
    title: 'skills',
  },
  {
    id: 6,
    title: 'contact',
  },
];

export const skillsHeaderData = [
  {
    id: 1,
    title: 'front end',
  },
  {
    id: 2,
    title: 'back end',
  },
  {
    id: 3,
    title: 'global',
  },
];

export const frontEndData = [
  {
    id: 1,
    title: 'Javascript',
    icon: <SiJavascript />,
    color: '#f0db4f',
    time: '16',
  },
  {
    id: 2,
    title: 'React',
    icon: <SiReact />,
    color: '#61dbfb',
    time: '12',
  },
  {
    id: 3,
    title: 'Netxt.js',
    icon: <SiNextdotjs />,
    color: '#222',
    time: '4',
  },
  {
    id: 4,
    title: 'React Native',
    icon: <SiReact />,
    color: '#61dbfb',
    time: '6',
  },
  {
    id: 5,
    title: 'Redux',
    icon: <SiRedux />,
    color: '#764abc',
    time: '12',
  },
  {
    id: 6,
    title: 'HTML',
    icon: <SiHtml5 />,
    color: '#f06529',
    time: '18',
  },
  {
    id: 7,
    title: 'CSS',
    icon: <SiCss3 />,
    color: '#2965f1',
    time: '18',
  },
  {
    id: 8,
    title: 'Styled C.',
    icon: <SiStyledcomponents />,
    color: '#222',
    time: '12',
  },
  {
    id: 9,
    title: 'Sass',
    icon: <SiSass />,
    color: '#cc6699',
    time: '14',
  },
];

export const backEndData = [
  {
    id: 1,
    title: 'NodeJS',
    icon: <SiNodedotjs />,
    color: '#83ba63',
    time: '12',
  },
  {
    id: 2,
    title: 'Express',
    icon: <SiExpress />,
    color: '#222',
    time: '12',
  },
  {
    id: 3,
    title: 'MongoDB',
    icon: <SiMongodb />,
    color: '#3fa037',
    time: '12',
  },
  {
    id: 4,
    title: 'Firebase',
    icon: <SiFirebase />,
    color: '#ffcb2b',
    time: '6',
  },
  {
    id: 5,
    title: 'Postman',
    icon: <SiPostman />,
    color: '#ef5b25',
    time: '12',
  },
];

export const globalSkillsData = [
  {
    id: 1,
    title: 'Figma',
    icon: <SiFigma />,
    color: '#222',
    time: '12',
  },

  {
    id: 2,
    title: 'Git',
    icon: <SiGit />,
    color: '#f34f29',
    time: '14',
  },
  {
    id: 3,
    title: 'Github',
    icon: <SiGithub />,
    color: '#211F1F',
    time: '14',
  },
  {
    id: 4,
    title: 'NPM',
    icon: <SiNpm />,
    color: '#CC3534',
    time: '12',
  },
  {
    id: 5,
    title: 'VS Code',
    icon: <SiVisualstudiocode />,
    color: '#0078d7',
    time: '18',
  },
];

export const projectsData = [
  {
    id: 1,
    src: images.project1,
    title: 'MERN Project',
    subtitle: 'Invoice App',
    category: 'Full Stack Project - Frontend Mentor',
    tech: 'React / Redux / Styled Components / NodeJS / Express / MongoDB',
    code: 'https://github.com/MathisHumbert/mern-invoice-app',
    website: 'https://mern-invoice-app.herokuapp.com/',
  },
  {
    id: 2,
    src: images.project2,
    title: 'React Landing Page',
    subtitle: 'Skillex',
    category: 'Front End Project - cloned website from Dribbble',
    tech: 'React / Styled Components / GSAP',
    code: 'https://github.com/MathisHumbert/react-clone-skillex-website',
    website: 'https://cloned-skillex-webiste.netlify.app/',
  },
  {
    id: 3,
    src: images.project3,
    title: 'Full Stack JavaScript',
    subtitle: 'Product Feedback',
    category: 'Full Stack Project - Frontend Mentor',
    tech: 'JavaScirpt / Sass / HTML / NodeJS / Express / MongoDB',
    code: 'https://github.com/MathisHumbert/product-feedback-full-stack-app',
    website: 'https://product-feedback-fullstack-app.herokuapp.com/',
  },
];

export const footerData = [
  {
    id: 1,
    logo: <SiTwitter />,
    url: 'https://twitter.com/Mathis1Humbert',
  },
  {
    id: 2,
    logo: <SiGithub />,
    url: 'https://github.com/MathisHumbert',
  },
  {
    id: 3,
    logo: <SiLinkedin />,
    url: 'https://www.linkedin.com/in/mathis-humbert-1612ba1b5/',
  },
  {
    id: 4,
    logo: <SiFrontendmentor />,
    url: 'https://www.frontendmentor.io/profile/MathisHumbert',
  },
  {
    id: 5,
    logo: <SiFreecodecamp />,
    url: 'https://www.freecodecamp.org/mathisse',
  },
  {
    id: 6,
    logo: <SiCodewars />,
    url: 'https://www.codewars.com/users/MathisHumbert',
  },
];
