import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Headings from '../components/headings';

export default class projects extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <Headings title="Projects" />
      </Layout>
    );
  }
}
