import { Link } from 'gatsby';
import React from 'react';

import GenericLayout from '../layout/GenericLayout';

export default function NotFoundPage() {
  return (
    <GenericLayout>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/">Go home</Link>
        .
      </p>
    </GenericLayout>
  );
}

export function Head() {
  return <title>Not found</title>;
}
