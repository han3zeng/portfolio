import config from '../config';
import twReporterLogo from '../assets/tw-reporter-logo.png';
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

const worksContent = [
  {
    id: 0,
    title: 'This is the Project',
    skillStack: 'Node / React',
    thumbnail: twReporterLogo,
    introduction: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  },
  {
    id: 1,
    title: 'This is the Project',
    skillStack: 'Node / React',
    thumbnail: twReporterLogo,
    introduction: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  },
  {
    id: 2,
    title: 'This is the Project',
    skillStack: 'Node / React',
    thumbnail: twReporterLogo,
    introduction: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  },
  {
    id: 3,
    title: 'This is the Project',
    skillStack: 'Node, React',
    thumbnail: twReporterLogo,
    introduction: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  }
];


export {
  navSection,
  landingContent,
  worksContent
}
