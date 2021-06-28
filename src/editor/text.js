import config from '../config';
const { cdnUrlBase } = config;


const navSection = [
  {
    text: '多少人受害',
    anchorId: 'how-many',
  },
  {
    text: '下架很難嗎',
    anchorId: 'take-down',
  },
  {
    text: '為何不報案',
    anchorId: 'why-dont-report',
  },
  {
    text: '誰叫你要拍',
    anchorId: 'your-responsibility',
  },
  {
    text: '解方為何',
    anchorId: 'solution',
  }
];

const landingContent = {
  title: 'Hi, I am Han Yu Tseng<br/> I am a Front-end developer',
  contents: [
    `I am terrible at drawing.<br/><br/>Once I figure it out that I am able to make drawing with Front-end web development, I can't stop myself from learning more.`,
    'I like to develope news web-project which baed on truths and facts.',
    `Let's make something special. Please check out my works below.`,
  ],
  imgs: [
    `${cdnUrlBase}/shred-people-1.jpg`,
    `${cdnUrlBase}/shred-people-2.jpg`,
    `${cdnUrlBase}/shred-people-3.jpg`,
    `${cdnUrlBase}/shred-people-4.jpg`,
    `${cdnUrlBase}/shred-people-5.jpg`,
    `${cdnUrlBase}/shred-people-6.jpg`,
  ],
}


export {
  navSection,
  landingContent,
}
