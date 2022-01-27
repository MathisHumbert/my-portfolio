import images from '../assets/code';
import mainImages from '../assets';

const data = [
  {
    id: 1,
    title: 'MERN Invoice App',
    img: mainImages.project1,
    code: 'https://github.com/MathisHumbert/mern-invoice-app',
    website: 'https://mern-invoice-app.herokuapp.com/',
    header: 'header_text1',
    tech: [
      'React',
      'Redux',
      'Styled Components',
      'NodeJS',
      'Express',
      'MongoDB',
    ],

    challenges: ['p1_ch1', 'p1_ch2', 'p1_ch3', 'p1_ch4', 'p1_ch5'],
    success: [
      'p1_su1',
      'p1_su2',
      'p1_su3',
      'p1_su4',
      'p1_su5',
      'p1_su6',
      'p1_su7',
      'p1_su8',
    ],
    codeExamples: [
      images.code1,
      images.code2,
      images.code3,
      images.code4,
      images.code5,
      images.code6,
      images.code7,
      images.code8,
    ],
    learn: 'learn-1',
  },
  {
    id: 2,
    title: 'React Landing Page',
    img: mainImages.project2,
    code: 'https://github.com/MathisHumbert/react-clone-skillex-website',
    website: 'https://cloned-skillex-webiste.netlify.app/',
    header: 'header_text2',
    tech: ['React', 'Styled Components', 'GSAP', 'Context API'],

    challenges: ['p2_ch1', 'p2_ch2', 'p2_ch3', 'p2_ch4'],
    success: ['p2_su1', 'p2_su2', 'p2_su3', 'p2_su4'],
    codeExamples: [images.code9, images.code10, images.code11],
    learn: 'learn-2',
  },
  {
    id: 3,
    title: 'Full Stack JavaScript Product Feedback App',
    img: mainImages.project3,
    code: 'https://github.com/MathisHumbert/product-feedback-full-stack-app',
    website: 'https://product-feedback-fullstack-app.herokuapp.com/',
    header: 'header_text3',
    tech: ['JavaScript', 'Sass', 'HTML', 'NodeJS', 'Express', 'MongoDB'],

    challenges: ['p3_ch1', 'p3_ch2', 'p3_ch3', 'p3_ch4', 'p3_ch5', 'p3_ch6'],
    success: ['p3_su1', 'p3_su2', 'p3_su3', 'p3_su4', 'p3_su5', 'p3_su6'],
    codeExamples: [
      images.code12,
      images.code13,
      images.code14,
      images.code15,
      images.code16,
      images.code17,
    ],
    learn: 'learn-3',
  },
];

export default data;
