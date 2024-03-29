// @ts-nocheck
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import logo from '../images/logo_transparent.png';
import Socials from './socials';
import { media } from './breakpoints';

const SiteHeader = styled.header`
  display: flex;
  background: #222;
  box-shadow: 0 0 14px #000;
  max-width: 20vw;
  min-width: 15vw;
  height: 100vh;
  margin: 0;
  padding: 1.45rem 1.0875rem;
  position: fixed;
  z-index: 1;

  ${media.desktop`
    display: block;
    position: relative;
    max-width: 100vw;
    height: 10rem;
  `}

  ${media.desktop`
    position: fixed;
    width: 100vw;
  `}

  ${media.tablet`
    position:relative;
  `}

  ${media.smallTablet`
    position: relative;
    background: transparent;
    box-shadow: none;
  `}

  ${media.phone`
    position: relative;
  `}
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  justify-content: space-between;

  ${media.desktop`
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
  `}

  ${media.smallTablet`
    display: block;
  `}

  h1 {
    margin: 0;

    ${media.smallTablet`
      display: none;
    `}
  }
`;

const NavUlList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
      flex-direction: row;
  `}

  ul {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex: 1;
    margin: 0 0 4rem 0;
    padding: 0;

    ${media.desktop`
      flex-direction: row;
      margin: 0;
  `}
  }

  li {
    list-style: none;
    padding: 1rem;
    text-align: center;
    font-weight: 300;

    ${media.desktop`
      margin-bottom: 1.7rem;
    `}

    > a:link,
    > a:visited {
      color: inherit;
    }

    > a::after,
    > a:visited::after {
      content: "";
      display: block;
      border-bottom: 2px solid #fa8231;
      transform: scaleX(0);
      transition: transform 0.25s ease-in-out;
      padding-top: 8px;
    }

    > a:hover::after,
    > a:active::after {
      transform: scaleX(1);
    }

    .active::after {
      content: "";
      display: block;
      border-bottom: 2px solid #b04904;
      transform: scaleX(1);
      padding-top: 8px;
    }
  }
`;

const SocialWrap = styled.div`
  justify-self: flex-end;

  ${media.desktop`
    display: none;
  `}
`;

const Header = ({ menuLinks }) => (
  <StaticQuery
    query={graphql`
      query SiteIconQuery {
        site {
          siteMetadata {
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
        <SiteHeader>
          <NavWrapper>
            <h1>
              <Link to="/">
                <img src={logo} alt="DB Logo" style={{ width: '100px', height: 'auto' }} />
              </Link>
            </h1>
            <NavUlList>
              <ul>
                {menuLinks.map(linkNav => (
                  <li key={linkNav.name}>
                    <Link to={linkNav.link} activeClassName="active">
                      {linkNav.name}
                      {' '}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavUlList>
            <SocialWrap>
              <Socials socialIcons={data.site.siteMetadata.socialIcons} />
            </SocialWrap>
          </NavWrapper>
          <div />
        </SiteHeader>
      </>
    )}
  />
);

Header.propTypes = {
  menuLinks: PropTypes.array,
};

Header.defaultProps = {
  menuLinks: '',
};

export default Header;
