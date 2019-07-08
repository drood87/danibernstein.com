// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Socials from './socials';
import { media } from './breakpoints';
import './layout.css';

const BodyContainer = styled.div`
  position: relative;
  margin-left: 20vw;

  ${media.desktop`
    margin: 0 auto;

  `}
`;

const SocialWrapper = styled.div`
  ${media.giant`
    display: none;
  `}

  ${media.desktop`
  display: block;
  position: fixed;
  right: 1rem;
  top: 90%;

  `}
`;

const StyledFooter = styled.footer`
  font-size: 0.6rem;
  margin-top: 14%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 5%;
  text-align:center;

  ${media.desktop`
    margin: 0 auto;
    text-align: center;
  `}

  ${media.tablet`
    padding-top: 4%;
  `}

  ${media.smallTablet`
    padding-top: 7%;
    padding-left: 0;
  `}
`;

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto 60px;
  min-height: 70vh;
  padding: 100px 5% 80px;

  ${media.desktop`
    margin: 0 auto;
    padding: 10rem;
  `}

  ${media.tablet`
    padding: 100px 5% 80px;
  `}
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
