/* eslint-disable max-len */
// @ts-nocheck
// @ts-ignore
import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Headings from '../components/headings';

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
      <ButtonStyled type="button">Projects</ButtonStyled>
    </Link>
    <Link to="/contact">
      <ButtonStyled type="button" primary>
        Contact me
      </ButtonStyled>
    </Link>
  </Layout>
);

const ButtonStyled = styled.button`
  border: none;
  margin: 0 2rem 0 0;
  padding: 0.7rem 3rem;
  width: auto;
  overflow: visible;
  cursor: pointer;
  background: transparent;
  display: inline-block;
  background-color: ${props => (props.primary ? '#fa8231' : 'transparent')};
  border-radius: 30px;

  border: 2px solid #fa8231;

  /* inherit font & color from ancestor */
  color: #fff;
  font: inherit;

  /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable 'input' types in iOS */
  -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  :active,
  :focus {
    outline: none;
  }
`;

export default IndexPage;
