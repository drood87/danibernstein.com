module.exports = {
  siteMetadata: {
    title: 'Daniel Bernstein',
    // eslint-disable-next-line max-len
    description: 'Producing modern excellent websites',
    author: '@Dan Bernstein',
    socialIcons: [
      {
        name: 'twitter',
        url: 'https://twitter.com/droodor87',
      },
      {
        name: 'github',
        url: 'https://github.com/drood87',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/dani87dani/',
      },
      {
        name: 'email',
        url: 'mailto:dbernstein87@googlemail.com',
      },
    ],
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'About Me',
        link: '/about',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
    projects: [
      {
        name: 'Natours',
        techStack: ['SCSS', 'CSS3', 'HTML5', 'NPM'],
        link: 'https://www.natours.danibernstein.com/',
      },
      {
        name: 'Nexter',
        techStack: ['SCSS', 'CSS3', 'HTML5', 'NPM'],
        link: 'https://www.nexter.danibernstein.com/',
      },
      {
        name: 'Omnifood',
        techStack: ['SCSS', 'CSS3', 'HTML5', 'Javascript'],
        link: 'https://www.omnifood.danibernstein.com',
      },
      {
        name: 'SmartBrain App',
        techStack: ['React.js', 'Node.js', 'Express', 'Clarifai Api'],
        link: 'https://smart-face-detection123.herokuapp.com/',
      },
      {
        name: 'Catch of the day',
        techStack: ['React.js', 'Firebase', 'React-Router', 'React Transition Group'],
        link: 'https://www.catchoftheday.danibernstein.com/',
      },
      {
        name: 'GDDB',
        techStack: ['React.js', 'Gatsby', 'Reach-Router', 'StyledComponents'],
        link: 'https://www.gddb.danibernstein.com/',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'danibernstein.com',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#fa8231',
        theme_color: '#fa8231',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
