import config from '../config';
import twReporterLogo from '../assets/tw-reporter-logo.png';
import pro360Img from '../assets/pro-360-img.png';
const { cdnUrlBase } = config;

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
    title: 'TheReporter',
    subTitle: 'Taiwan non government organization official website',
    skillStack: 'Node / React / Redux / Git',
    thumbnail: twReporterLogo,
    imgUrls: ['https://www.twreporter.org/images/og-image-large.jpg'],
    withPadding: true,
    introduction: `twreporter.org is a Taiwanese news website. The site offers news, in-depth report and covers politics, environment, culture, women's interesets, Cross-strait relations, etc.`,
    href: 'https://www.twreporter.org/',
    backgroundSize: 'contain',
  },
  {
    id: 1,
    title: 'Suicide Survivor',
    subTitle: 'The special report made by TheReporter',
    skillStack: 'React / Webpack',
    thumbnail: 'https://storage.googleapis.com/twreporter-infographics/walk-with-survivor-of-suicide-gcs/static/coverphoto_mobile.jpg',
    imgUrls: ['https://storage.googleapis.com/twreporter-infographics/walk-with-survivor-of-suicide-gcs/static/case1_mobile.jpg'],
    withPadding: true,
    introduction: `The special report cover three true agnoizing stories. They are about how sucidie survivor cope with the tragedy and try hard to carry the pain and move on.`,
    href: 'https://www.twreporter.org/i/walk-with-survivor-of-suicide-gcs',
    backgroundSize: 'cover',
  },
  {
    id: 2,
    title: 'PRO360',
    subTitle: 'The online service that matches customers with local professionals',
    skillStack: 'Node / React / Redux / Webpack / node.js / Git',
    thumbnail: 'https://dfv9n9rpncj8c.cloudfront.net/images/page/pro360_menu.png',
    imgUrls: [pro360Img],
    withPadding: true,
    introduction: `PRO360 is a leading local service marketplace, which help pros (service providers) more quickly connect with customers who are starting new projects.`,
    href: 'https://www.pro360.com.tw/'
  },
  {
    id: 3,
    title: 'This is the Project',
    subTitle: 'This is subtitle',
    skillStack: 'Node, React',
    thumbnail: twReporterLogo,
    imgUrls: ['https://www.twreporter.org/images/og-image-large.jpg'],
    withPadding: true,
    introduction: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
href: 'https://www.twreporter.org/'
  }
];


export {
  landingContent,
  worksContent
}
