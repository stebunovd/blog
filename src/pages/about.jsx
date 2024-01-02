import React from 'react';

import photo from './photo.jpeg';
import GenericLayout from '../layout/GenericLayout';
import SEO from '../layout/SEO';

export default function AboutPage() {
  return (
    <GenericLayout>
      <h1>About</h1>
      <img
        alt="Denis Stebunov"
        src={photo}
        height={200}
        width={200}
        style={{
          marginBottom: '1em',
        }}
      />
      <p>
        Hi, I&apos;m Denis. I got my first full-time job as a developer in 1999
        and have been working in software development since then. I wear different
        hats - a developer, an engineering manager, and a product manager.
      </p>
      <p>
        I&apos;m CTO at
        {' '}
        <a href="https://ivelum.com">ivelum</a>
        , where we build custom software for startups and enterprises, and I also work on
        {' '}
        <a href="https://teamplify.com">Teamplify</a>
        {' '}
        – a team management suite for engineering
        teams.
      </p>
      <p>
        You can find me on
        {' '}
        <a href="https://twitter.com/dstebunov">
          Twitter
        </a>
        {', '}
        <a href="https://github.com/stebunovd">
          GitHub
        </a>
        {', '}
        <a href="https://www.linkedin.com/in/denis-stebunov/">
          LinkedIn
        </a>
        {', or '}
        <a href="https://www.instagram.com/stebunovd/">
          Instagram
        </a>
        . If you&apos;d like to discuss a potential project or book a consultation – feel free
        to drop me a line at
        {' '}
        <a href="mailto:denis@stebunov.com">denis@stebunov.com</a>
        .
      </p>
    </GenericLayout>
  );
}

export function Head() {
  return (
    <SEO
      title="Denis Stebunov – about"
      description="CTO at ivelum, Teamplify founder"
    />
  );
}
