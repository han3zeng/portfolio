import config from '../config';
import twReporterLogo from '../assets/tw-reporter-logo.png';
import twReporterOG from '../assets/tw-reporter-og.jpg';
import hanRecallLanding from '../assets/han-recall-landing.png';
import revengePornLanding from '../assets/revenge-porn-landing.png'
import taiwaneseLaborLanding from '../assets/taiwanese-labor-landing.png';
import covid19ChinLockdown from '../assets/covid-19-china-lockdown.png'
import blogServiceLanding from '../assets/blog-service-landing.png';
import blogService from '../assets/blog-service.jpg';
import pro360Img from '../assets/pro-360-img.png';
const { cdnUrlBase, tags } = config;

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
    imgUrls: [twReporterOG],
    withPadding: true,
    introduction: `twreporter.org is a Taiwanese news website. The site offers news, in-depth report and covers politics, environment, culture, women's interesets, Cross-strait relations, etc.`,
    href: 'https://www.twreporter.org/',
    backgroundSize: 'contain',
    tagSet: new Set([
      tags.node,
      tags.redux,
      tags.react,
    ])
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
    tagSet: new Set([
      tags.react,
      tags.webpack,
    ])
  },
  {
    id: 2,
    title: 'PRO360',
    subTitle: 'The online service that matches customers with local professionals',
    skillStack: 'Node / React / Redux / Webpack / Git',
    thumbnail: 'https://dfv9n9rpncj8c.cloudfront.net/images/page/pro360_menu.png',
    imgUrls: [pro360Img],
    withPadding: true,
    introduction: `PRO360 is a leading local service marketplace, which help pros (service providers) more quickly connect with customers who are starting new projects.`,
    href: 'https://www.pro360.com.tw/',
    backgroundSize: 'contain',
    tagSet: new Set([
      tags.node,
      tags.redux,
      tags.react,
      tags.webpack,
    ])
  },
  {
    id: 3,
    title: '2020 Kaohsiung Mayoral Recall Vote',
    subTitle: 'The special report made by Taiwan Public Television Service',
    skillStack: 'React / AWS / GCP / Redis / Docker / Express',
    thumbnail: 'https://d3prffu8f9hpuw.cloudfront.net/recall-vote-han-kuo-yu/og-img.jpg',
    imgUrls: [hanRecallLanding],
    withPadding: true,
    introduction: 'The 2020 Kaohsiung mayoral recall vote was a recall election held on 6 June 2020 to recall the incumbent mayor of Kaohsiung, Han Kuo-yu. The project offers a live report on recall result.',
    href: 'https://hanrecall.pts.org.tw/',
    backgroundSize: 'cover',
    tagSet: new Set([
      tags.aws,
      tags.gcp,
      tags.react,
      tags.redis,
      tags.docker,
      tags.express,
    ])
  },
  {
    id: 4,
    title: 'Covid-19 impact, Taiwanese Labour in China',
    subTitle: 'The special report made by Taiwan Public Television Service',
    skillStack: 'React / Styled-Components / light-house tuning',
    thumbnail: 'https://d3prffu8f9hpuw.cloudfront.net/taiwanese-businessman/og-img.jpg',
    imgUrls: [taiwaneseLaborLanding],
    withPadding: true,
    introduction: 'China reports zero new COVID-19 infection cases. Most Chinese companies are ready to reopen business. But are those Taiwanese employees willing to take the risk and travel back to China to work?',
    href: 'https://newmedia.pts.org.tw/sub-chinaoutbreak-3-/',
    backgroundSize: 'cover',
    tagSet: new Set([
      tags.react,
    ])
  },
  {
    id: 5,
    title: 'Revenge Porn Victims',
    subTitle: 'The special report made by Taiwan Public Television Service',
    skillStack: 'React / Styled-Components',
    thumbnail: 'https://d3prffu8f9hpuw.cloudfront.net/revenge-porn/og-img.jpg',
    imgUrls: [revengePornLanding],
    withPadding: true,
    introduction: 'Why some people can spread Nonconsensual Pornography with impunity? Why those Revenge Porns are illegal but still circulate online?',
    href: 'https://newmedia.pts.org.tw/revenge-porn/',
    backgroundSize: 'cover',
    tagSet: new Set([
      tags.react,
    ])
  },
  {
    id: 6,
    title: 'Covid-19 China Lockdown',
    subTitle: 'The special report made by Taiwan Public Television Service',
    skillStack: 'D3.js / React / Styled-Components',
    thumbnail: 'https://newslab.pts.org.tw/static/images/open-image.png',
    imgUrls: [covid19ChinLockdown],
    withPadding: true,
    introduction: 'The interaction map explains how covid-19 virus spread around the China, and the associated panel shows the related statistics.',
    href: 'https://newmedia.pts.org.tw/sub-chinaoutbreak/',
    backgroundSize: 'cover',
    tagSet: new Set([
      tags.react,
      tags.d3,
    ])
  },
  {
    id: 7,
    title: 'Side Project: Blog',
    subTitle: 'I practice interesting web dev skill on this project',
    skillStack: 'React / OAuth2 / Express / Docker / GCP',
    thumbnail: blogService,
    imgUrls: [blogServiceLanding],
    withPadding: true,
    introduction: 'The blog service includes the authorization and authentication system that based on OAuth 2.0.',
    href: 'https://react-playground-7kgn6zbeya-uc.a.run.app/',
    backgroundSize: 'contain',
    tagSet: new Set([
      tags.react,
      tags.node,
      tags.oAuth,
      tags.express,
      tags.docker,
      tags.gcp,
    ])
  }
];



export {
  landingContent,
  worksContent,
}
