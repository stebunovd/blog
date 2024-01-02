import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './typography.css';

export default function GenericLayout({ children }) {
  return (
    <>
      <nav>
        <Link to="/">Denis Stebunov&apos;s blog</Link>
        <ul className="topNavMenu">
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer className="footer">
        {`Copyright ${new Date().getFullYear()} by `}
        <Link to="/about">Denis Stebunov</Link>
        <br />
        <a href="https://twitter.com/dstebunov">
          Follow me on Twitter
        </a>
        <br />
        <br />
        All content licensed under
        {' '}
        <a href="https://creativecommons.org/licenses/by/4.0/">
          CC BY 4.0
        </a>
      </footer>
    </>
  );
}

GenericLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
