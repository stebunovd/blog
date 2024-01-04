import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import GenericLayout from '../layout/GenericLayout';
import SEO from '../layout/SEO';

export default function Post({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date } = frontmatter;
  return (
    <GenericLayout>
      <h1>{title}</h1>
      <p><i>{date}</i></p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>
        <Link to="/">&lt;&lt; Back to all posts</Link>
      </p>
    </GenericLayout>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        description
        slug
        title
      }
    }
  }
`;

export function Head({ data }) { // eslint-disable-line
  const { title, description } = data.markdownRemark.frontmatter; // eslint-disable-line
  return (
    <SEO title={title} description={description} />
  );
}
