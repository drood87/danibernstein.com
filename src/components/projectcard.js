/* eslint-disable max-len */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default class Projectcard extends Component {
  render() {
    const {
      name, techStack, link, img,
    } = this.props;
    return (
      <Card>
        <Img fluid={img.fluid} key={name} alt={name} style={{ height: '125px' }} />
        <h4>{name}</h4>
        <h5>Technologies used</h5>
        <ul>
          {techStack.map(stack => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>
        <a target="_blank" rel="noreferrer noopener" href={link}>
          Visit Site
        </a>
      </Card>
    );
  }
}

const Card = styled.div`
  width: 13.5rem;
  background-color: #222;
  margin-bottom: 2rem;
  box-shadow: 1px 3px 8px #000;
  height: 25.3rem;
  position: relative;

  &:last-child::after {
    content: "";
    width: 30px;
    height: 1px;
    position: absolute;
    left: 100%;
    top: 0px;
  }

  > h4 {
    background-color: #111;
    box-shadow: 1px 3px 8px #000;
    display: inline-block;
    padding: 1rem;
    position: relative;
    top: -1.4rem;
    font-weight: 300;
    margin-left: 20px;
    margin-bottom: 0;
    transform: rotate(-2deg);
  }

  > h5 {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 300;
    margin-left: 1.45rem;
    border-bottom: 1px solid #fa8231;
    padding-bottom: 14px;
  }

  > ul {
    list-style: none;
    grid-row: 4 / 7;
    display: grid;
    grid-template-rows: repeat(auto-fit, 2rem);

    > li {
      font-size: 0.7rem;
    }
  }

  > a:visited,
  > a:link {
    background-color: #fa8231;
    color: #fff;
    padding: 0.4rem 1rem;
  }
`;

Projectcard.propTypes = {
  name: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
}.isRequired;
