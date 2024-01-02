import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import GenericLayout from '../layout/GenericLayout';
import SEO from '../layout/SEO';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query PostsQuery {
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
  `);
  const posts = data.allMdx.edges;
  return (
    <GenericLayout>
      <h1>Posts</h1>
      {posts.map(({ node }) => (
        <>
          <h3 key={node.id}>
            <Link to={node.frontmatter.slug}>
              {node.frontmatter.title}
            </Link>
          </h3>
          <p>
            {node.frontmatter.description}
            {'. '}
            <Link to={node.frontmatter.slug}>
              Read more...
            </Link>
          </p>
        </>
      ))}
    </GenericLayout>
  );
}

export function Head() {
  return (
    <SEO />
  );
}
