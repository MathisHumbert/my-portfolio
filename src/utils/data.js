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
  SiWindowsterminal,
  SiNetlify,
  SiHeroku,
} from 'react-icons/si';

import images from '../assets';

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
    title: 'HTML',
    icon: <SiHtml5 />,
    color: '#f06529',
  },
  {
    id: 2,
    title: 'CSS',
    icon: <SiCss3 />,
    color: '#2965f1',
  },
  {
    id: 3,
    title: 'Sass',
    icon: <SiSass />,
    color: '#cc6699',
  },
  {
    id: 4,
    title: 'Javascript',
    icon: <SiJavascript />,
    color: '#f0db4f',
  },
  {
    id: 5,
    title: 'React',
    icon: <SiReact />,
    color: '#61dbfb',
  },
  {
    id: 6,
    title: 'Redux',
    icon: <SiRedux />,
    color: '#764abc',
  },
  {
    id: 7,
    title: 'Styled C.',
    icon: <SiStyledcomponents />,
    color: '#222',
  },
];

export const backEndData = [
  {
    id: 1,
    title: 'NodeJS',
    icon: <SiNodedotjs />,
    color: '#83ba63',
  },
  {
    id: 2,
    title: 'Express',
    icon: <SiExpress />,
    color: '#222',
  },
  {
    id: 3,
    title: 'MongoDB',
    icon: <SiMongodb />,
    color: '#3fa037',
  },
  {
    id: 4,
    title: 'Postman',
    icon: <SiPostman />,
    color: '#ef5b25',
  },
];

export const globalSkillsData = [
  {
    id: 1,
    title: 'VS Code',
    icon: <SiVisualstudiocode />,
    color: '#0078d7',
  },
  {
    id: 2,
    title: 'Git',
    icon: <SiGit />,
    color: '#f34f29',
  },
  {
    id: 3,
    title: 'Terminal',
    icon: <SiWindowsterminal />,
    color: '#222',
  },
  {
    id: 4,
    title: 'Netlify',
    icon: <SiNetlify />,
    color: '#20b2aa',
  },
  {
    id: 5,
    title: 'Heroku',
    icon: <SiHeroku />,
    color: '#6762A6',
  },
];

export const projectsData = [
  {
    id: 1,
    src: images.project1,
    title: 'MERN Project',
    subtitle: 'Invoice App',
    category: 'Full Stack Project / Frontend Mentor',
    tech: 'React / Redux / Styled Components / NodeJS / Express / MongooDB',
    code: 'https://github.com/MathisHumbert/mern-invoice-app',
    website: 'https://mern-invoice-app.herokuapp.com/',
  },
  {
    id: 2,
    src: images.project2,
    title: 'Full Stack JavaScript',
    subtitle: 'Product Feedback',
    category: 'Full Stack Project / Frontend Mentor',
    tech: 'JavaScirpt / Sass / HTML / NodeJS / Express / MongooDB',
    code: 'https://github.com/MathisHumbert/react-clone-skillex-website',
    website: 'https://cloned-skillex-webiste.netlify.app/',
  },
  {
    id: 3,
    src: images.project3,
    title: 'React Landing Page',
    subtitle: 'Skillex',
    category: 'Front End Project / cloned website from Dribbble',
    tech: 'React / Styled Components / GSAP',
    code: 'https://github.com/MathisHumbert/product-feedback-full-stack-app',
    website: 'https://product-feedback-fullstack-app.herokuapp.com/',
  },
];
