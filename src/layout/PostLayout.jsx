import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import GenericLayout from './GenericLayout';

function PostLayout({ children }) {
  const { date, title } = children.props.pageContext.frontmatter;
  const dateStr = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(new Date(date));
  return (
    <GenericLayout>
      <h1>{title}</h1>
      <p><i>{dateStr}</i></p>
      <div>{children}</div>
      <p>
        <Link to="/">&lt;&lt; Back to all posts</Link>
      </p>
    </GenericLayout>
  );
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostLayout;
