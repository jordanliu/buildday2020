module.exports = {
  siteMetadata: {
    title: `Build Day 2020 - DevC Kingston`,
    description: `Build days are virtual events where developers can come together, form teams, and code together in order to create projects for a challenge.`,
    author: `@DevC-Kingston`,
    siteUrl: `https://buildday.devckingston.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
