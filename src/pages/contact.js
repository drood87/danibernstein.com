import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Headings from '../components/headings';
import SEO from '../components/seo';
import { media } from '../components/breakpoints';

export default class contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <Headings title="Contact" />
        <p>If you would like to contact me for work or just to have a chat, please drop me an email.</p>
        <StyledMediaLink>
          <a href="mailto:dbernstein87@googlemail.com">dbernstein87@googlemail.com</a>
        </StyledMediaLink>
      </Layout>
    );
  }
}

const StyledMediaLink = styled.a`
  ${media.phone`
    font-size: 140%;
  `}
`;
