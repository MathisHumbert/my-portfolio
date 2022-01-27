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
];

export default data;
