import React from 'react';

import PostLayout from '../layout/PostLayout';
import SEO from '../layout/SEO';

export default function Post(data) {
  return PostLayout(data);
}

export function Head({ pageContext }) { // eslint-disable-line
  const { title, description } = pageContext.frontmatter; // eslint-disable-line
  return (
    <SEO title={title} description={description} />
  );
}
