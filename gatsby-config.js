const config = require( './package.json' );

const { title, description, author, repository, homepage, name } = config;

const siteMetadata = {
  companyName: title,
  companyUrl: repository.url,
  authorName: author.name,
  authorUrl: author.url,
  siteUrl: homepage,
  siteDescription: description,
  title: name,
  description: description
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Criminality in UA`,
        short_name: `criminality`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
