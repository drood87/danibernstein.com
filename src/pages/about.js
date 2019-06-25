import React, { Component } from 'react';
import Layout from '../components/layout';
import Headings from '../components/headings';
import SEO from '../components/seo';

export default class about extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About Me" />
        <Headings title="About me" />
      </Layout>
    );
  }
}
