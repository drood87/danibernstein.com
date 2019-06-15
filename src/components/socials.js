import React from 'react';
import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Socials = ({ socialIcons }) => (
  <div>
    {socialIcons.map(social => (
      <SocialIcon url={social.url} key={social.name} style={{ height: 25, width: 25 }} target="_blank" />
    ))}
  </div>
);

Socials.propTypes = {
  socialIcons: PropTypes.string.isRequired,
};

export default Socials;
