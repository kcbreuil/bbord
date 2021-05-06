/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Blackbird Ordinary`,
    description: `Brickell's favorite bar`,
    author: `Katie Breuil`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Special Elite", "Raleway Dots", "Itim", "Open Sans Condensed"],
        },
      },
    },
    {
      resolve: "@ccalamos/gatsby-source-googlemaps-static",
      options: {
        key: process.env.GATSBY_GOOGLE_API_KEY,
        center: "41.8781,-87.6298",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    'gatsby-plugin-postcss',
  ],
}
