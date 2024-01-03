/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

module.exports = {
  siteMetadata: {
    title: 'Denis Stebunov – blog',
    description: 'Thoughts about software development and engineering management',
    siteUrl: 'https://stebunov.com',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 680,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
      __key: 'content',
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ['develop', 'build-javascript'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'stebunov.com',
        region: 'eu-north-1',
        acl: null,
        mergeCachingParams: false,
        generateRoutingRules: false,
        generateIndexPageForRedirect: false,
        generateMatchPathRewrites: false,
        enableS3StaticWebsiteHosting: false,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(({ node }) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.description,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.slug,
                });
              });
            },
            query: `
              {
                allMdx(sort: { frontmatter: { date: DESC }}) {
                  edges {
                    node {
                      id
                      frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        description
                        slug
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Denis Stebunov\'s blog - RSS',
          },
        ],
      },
    },
  ],
};
