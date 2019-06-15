import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import logo from '../images/100x100.svg';
import Socials from './socials';

const SiteNav = styled.header`
  display: flex;
  background: rebeccapurple;
  max-width: 20vw;
  min-width: 15vw;
  height: 100vh;
  margin: 0;
  padding: 1.45rem 1.0875rem;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;

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
    margin: 0;
    padding: 0;
  }

  li {
    list-style-position: none;
    padding: 1rem;
    text-align: center;
  }
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
        <SiteNav>
          <NavWrapper>
            <h1>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <img src={logo} alt="DB Logo" />
              </Link>
            </h1>
            <NavUlList>
              <ul>
                {menuLinks.map(link => (
                  <li
                    key={link.name}
                    style={{
                      listStyleType: 'none',
                      padding: '1rem',
                    }}
                  >
                    <Link style={{ color: 'white' }} to={link.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavUlList>
            <Socials socialIcons={data.site.siteMetadata.socialIcons} name={data.site.siteMetadata.name} />
          </NavWrapper>
          <div />
        </SiteNav>
      </>
    )}
  />
);

Header.propTypes = {
  menuLinks: PropTypes.string,
};

Header.defaultProps = {
  menuLinks: '',
};

export default Header;
