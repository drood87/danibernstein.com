import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Headings from '../components/headings';
import SEO from '../components/seo';
import Image from '../components/image';

export default class about extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About Me" />
        <div style={{ marginTop: '-80px' }}>
          <Headings title="About me" />
          <p>Hey there, glad you found me!</p>
          <p>My name is Daniel Bernstein.</p>
          <p>
            I&apos;m a Junior Web Developer from Germany. I lived the past 5 years in beautiful Sydney, Australia and
            now I started my own Web Development Business in Bali, Indonesia
            {' '}
            <span role="img" aria-label="PalmTree">
              🌴.
            </span>
          </p>
          <p>
            I do freelancing work for people and businesses that I find interesting, challenging, and support my own
            values.
          </p>
          <p>
            I relish traveling to different places in the world and meeting new interesting people along the way. I
            enjoy exploring new cultures, countries and ways of living.
            {' '}
            <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/dani87dani/">
              Nature photography
            </a>
            {' '}
            is another thing what I enjoy.
          </p>
          <p>
            To keep myself fit and sane I love doing
            {' '}
            <a target="_blank" rel="noreferrer noopener" href="https://www.crossfit.com/what-is-crossfit">
              {' '}
              CrossFit
            </a>
            {' '}
            and challenge myself everyday anew. I&apos;m a big adherent in clean eating and the positive effects on the
            body it goes along with.
          </p>
          <p>
            I love all things Marvel and am a massive MCU nerd and a big fan of RDJ. I also enjoy playing video games
            (especially Blizzard games) if I get the time to do so.
          </p>
          <p>
            If you would like to work with me or just have a chat, please
            {' '}
            <Link to="/contact">contact</Link>
            {' '}
me.
          </p>
          <ImageContainerStyled>
            <Image />
          </ImageContainerStyled>
          <Resume>
            <FakeButtons />
            <h3>Resume</h3>
            <h4>Summary of Qualifications</h4>
            <ul>
              <li>Diploma in Information Technology from Strathfield College in Sydney, AU</li>
              <li>Advanced Diploma of Information Technology Project Management.</li>
              <li>Excellent motivation, organization and problem solving skills.</li>
              <li>Passionate about Web Development and new technologies.</li>
              <li>
                Part of a Management Team with 5 members that takes care and helps around 50.000 aspiring web developers
                around the world for Andrei Neagoie&apos;s web development courses and Discord server.
                {' '}
              </li>
            </ul>

            <h4>Tech</h4>
            <h5>Front-End Languages/Frameworks</h5>
            <ul>
              <li>React.js</li>
              <li>Modern Javascript ES5/ES6/ES7/ES8</li>
              <li>HTML5 (Semantic/Web accessibility)</li>
              <li>Styled Components</li>
              <li>CSS3</li>
              <li>SASS/SCSS</li>
              <li>Bootstrap</li>
            </ul>

            <h5>Back-End Frameworks</h5>
            <ul>
              <li>Express.js</li>
            </ul>

            <h5>Databases</h5>
            <ul>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
            </ul>

            <h5>Other</h5>
            <ul>
              <li>Git</li>
              <li>Gatsby</li>
              <li>Bash</li>
              <li>Working with API&apos;s</li>
            </ul>
          </Resume>
        </div>
      </Layout>
    );
  }
}

const Resume = styled.div`
  background: #222;
  width: 98%;
  margin: 80px auto 50px;
  font-family: "Inconsolata", monospace;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  &:before {
    border-radius: 6px 6px 0 0;
    content: "";
    background: #1a1a1a;
    width: 100%;
    display: block;
    height: 20px;
    position: relative;
    top: -4px;
  }
  &:after {
    border-radius: 0 0 6px 6px;
    content: "";
    background: #1a1a1a;
    width: 100%;
    display: block;
    height: 20px;
    position: relative;
    bottom: -4px;
  }
  h3 {
    font-family: "Inconsolata", monospace;
    font-weight: 400;
    margin-left: 20px;
  }
  h4 {
    font-family: "Inconsolata", monospace;
    font-weight: 400;
    color: #aaa;
    margin: 50px 20px 20px;
  }
  h5 {
    font-family: "Inconsolata", monospace;
    font-weight: 400;
    color: #aaa;
    margin: 40px 20px 20px;
  }
  .time {
    margin-bottom: 10px;
    display: block;
    font-size: 13px;
    color: #aaa;
  }
  .resume-inside {
    padding: 16px 20px 16px;
  }
  ul {
    margin: 0 20px;
    list-style: none;
  }
  li {
    margin-bottom: 15px;
    color: #eee;
  }
`;

const FakeButtons = styled.span`
  background: #fa8231;
  height: 7px;
  width: 7px;
  display: block;
  border-radius: 7px;
  position: relative;
  top: -17px;
  left: 22px;
  &:before,
  &:after {
    content: "";
    background: #fa8231;
    height: 7px;
    width: 7px;
    display: block;
    border-radius: 7px;
    position: relative;
    top: 0;
  }
  &:before {
    left: -13px;
  }
  &:after {
    top: -7px;
    left: 13px;
  }
`;

const ImageContainerStyled = styled.div`
  max-width: 70%;
  max-height: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  grid-gap: 2rem;
`;
