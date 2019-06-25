import React, { Component } from 'react';
import Layout from '../components/layout';
import Headings from '../components/headings';
import SEO from '../components/seo';

export default class contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <Headings title="Contact" />
      </Layout>
    );
  }
}
