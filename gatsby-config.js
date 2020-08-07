/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


module.exports = {
  //grapql
  siteMetadata : {
    // site : {
      title : `Pandas Eating Lots`,
    // },
  },

  // plugin
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`, // highlight-line
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography/typography`,
      },
    },
  ],



  // /* Your site config here */
  // plugins: [
  //   {
  //     resolve : `gatsby-source-filesystem`,
  //     options : {
  //       name : `pages`,
  //       path : `${__dirname}/src/pages`
  //     },
  //   },
  //   {
  //     resolve : `gatsby-source-filesystem`,
  //     options : {
  //       name : `posts`,
  //       path : `${__dirname}/src/posts`
  //     },
  //   },
  //   {
  //     resolve : `gatsby-source-filesystem`,
  //     options : {
  //       name : `images`,
  //       path : `${__dirname}/src/images`,
  //     },
  //   },
  //   `gatsby-plugin-sharp`,
  //   `gatsby-transformer-sharp`,
  //   // grapql 관련,
  //   {
  //     reslove : `gatsby-plugin-mdx`,
  //     options : {
  //       extensions : [`.md`, `.mdx`],
  //       gatsbyRemarkPlugins : [
  //         {
  //           resolve : `gatsby-remark-images`,
  //           options : {
  //             maxWidth : 1200,
  //           },
  //         },
  //       ],
  //     },
  // },
  // {
  //   resolve : `gatsby-plugin-google-fonts`,
  //   options : {
  //     fonts : [
  //       `roboto mono`,
  //       `muli\:400,400i,700,700i`,
  //     ],
  //     display : "swap",
  //     },
  //   },
  // ],
}
