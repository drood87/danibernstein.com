import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import logo from '../images/100x100.svg';
import Socials from './socials';

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
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  justify-content: space-between;

  h1 {
    margin: 0;
  }
`;

const NavUlList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex: 1;
    margin: 0 0 4rem 0;
    padding: 0;
  }

  li {
    list-style: none;
    padding: 1rem;
    text-align: center;
    font-weight: 300;

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
                <img src={logo} alt="DB Logo" />
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
