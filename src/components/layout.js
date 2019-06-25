// @ts-nocheck
/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Socials from './socials';
import './layout.css';

const BodyContainer = styled.div`
  position: relative;
  margin-left: 20vw;
`;

const SocialWrapper = styled.div`
  position: fixed;
  right: 1rem;
  top: 90%;
`;

const StyledFooter = styled.footer`
  font-size: 0.6rem;
  margin-top: 14%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 5%;
`;

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto 60px;
  min-height: 70vh;
  padding: 160px 5% 80px;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              link
              name
            }
            socialIcons {
              name
              url
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <BodyContainer>
          <Main>{children}</Main>
          <StyledFooter>
            ©
            {' '}
            {new Date().getFullYear()}
, coded and designed by
            {' '}
            <a href="https://github.com/drood87">Daniel Bernstein</a>
            {' '}
with ☕️, 🎧 and ❤️ in Bali 🌴
            {' '}
          </StyledFooter>
          {' '}
        </BodyContainer>
        <SocialWrapper>
          <Socials socialIcons={data.site.siteMetadata.socialIcons} name={data.site.siteMetadata.name} />
        </SocialWrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
