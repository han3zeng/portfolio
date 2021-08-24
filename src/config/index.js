// mobile <= 767
// tablet 768 - 1023
// deskto >= 1024 && <= 1440
const breakpoints = {
  maxDesktop: '1440',
  minDesktop: '1024',
  maxTablet: '1023',
  minTablet: '768',
  maxMobile: '767',
  maxiPhone: '414',
}

const tags = {
  node: 'Node',
  webpack: 'Webpack',
  aws: 'AWS',
  gcp: 'GCP',
  docker: 'Docker',
  redis: 'Redis',
  react: 'React',
  redux: 'Redux',
  d3: 'D3.js',
  oAuth: 'OAuth',
  express: 'Express',
}

const config = {
  textMaxWidth: '400',
  breakpoints,
  cdnUrlBase: 'https://d3prffu8f9hpuw.cloudfront.net/revenge-porn',
  tags,
}

export default config;
