import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class Projectcard extends Component {
  render() {
    const { name, techStack, link } = this.props;
    return (
      <Card>
        <img src="https://via.placeholder.com/250x120.png" alt="Project1" />
        <h4>{name}</h4>
        <h5>Technologies used</h5>
        <ul>
          {techStack.map(stack => (
            <li>{stack}</li>
          ))}
        </ul>
        <div>
          <a href={link}>Visit Site</a>
        </div>
      </Card>
    );
  }
}

const Card = styled.div`
  width: 13.5rem;
  background-color: #222;
  margin-bottom: 2rem;
  box-shadow: 1px 3px 8px #000;

  > h4 {
    background-color: #111;
    box-shadow: 1px 3px 8px #000;
    display: inline-block;
    padding: 1rem;
    position: relative;
    top: -2.4rem;
    font-weight: 300;
    margin-left: 20px;
    margin-bottom: 0;
    transform: rotate(-2deg);
    align-self: flex-start;
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

    > li {
      font-size: 0.7rem;
    }
  }

  div {
    > a:visited,
    > a:link {
      background-color: #fa8231;
      color: #fff;
      padding: 0.4rem 1rem;
      align-self: flex-start;
    }
  }
`;

Projectcard.propTypes = {
  name: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
}.isRequired;
