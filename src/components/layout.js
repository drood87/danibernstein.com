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

const FlexSiteContainer = styled.div`
  display: flex;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  position: relative;
`;

const SocialWrapper = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
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
        <FlexSiteContainer>
          <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <BodyContainer>
            <main>{children}</main>
            <footer>
              ©
              {' '}
              {new Date().getFullYear()}
, Built with
              {' '}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
            {' '}
          </BodyContainer>
          <SocialWrapper>
            <Socials socialIcons={data.site.siteMetadata.socialIcons} name={data.site.siteMetadata.name} />
          </SocialWrapper>
        </FlexSiteContainer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
