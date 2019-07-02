import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Headings from '../components/headings';
import SEO from '../components/seo';

export default class about extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About Me" />
        <Headings title="About me" />
        <p>
          Hey there, glad you found me!
          {' '}
          <span role="img" aria-label="Smiley">
            😏
          </span>
          {' '}
        </p>
        <p>My name is Daniel Bernstein.</p>
        <p>
          I&apos;m a Junior Web Developer from Germany. I lived the past 5 years in beautiful Sydney, Australia and now
          I started my own Web Development Business in Bali, Indonesia
          {' '}
          <span role="img" aria-label="PalmTree">
            🌴.
          </span>
        </p>
        <p>
          I do freelancing work for people and businesses that I believe in, find challenging, and support my own
          values.
        </p>
        <p>
          I&apos;m a big believer that everyone should do what they love and still be able to make money and feed them
          to escape the rat race.
        </p>
        <p>
          I enjoy traveling to different places in the world and meet new interesting people along the way. I enjoy
          exploring new cultures and believes.
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
          and challenge myself everyday anew. I&apos;m a big believer in clean eating and the positive effects on the
          body.
        </p>
        <p>
          But I am not a complete hippie
          {' '}
          <span role="img" aria-label="Wink">
            {' '}
            😄
            {' '}
          </span>
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
      </Layout>
    );
  }
}
