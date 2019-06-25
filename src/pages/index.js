import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Headings from '../components/headings';
import Button from '../components/button';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Headings title={'Hey I\'m Dan'} />
    <h3>
      I create blazing fast modern websites. Get in touch now.
      {' '}
      <span role="img" aria-label="High Five">
        🙌
      </span>
    </h3>
    <Link to="/projects">
      <Button directTo="Projects" />
    </Link>
    <Link to="/contact">
      <Button directTo="Contact" />
    </Link>
  </Layout>
);

export default IndexPage;
