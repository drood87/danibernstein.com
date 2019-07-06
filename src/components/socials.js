import React from 'react';
import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const iconStyle = { marginRight: '6px', height: 25, width: 25 };

const Socials = ({ socialIcons }) => (
  <div>
    {socialIcons.map(social => (
      <SocialIcon url={social.url} key={social.name} style={iconStyle} target="_blank" />
    ))}
  </div>
);

Socials.propTypes = {
  socialIcons: PropTypes.array.isRequired,
};

export default Socials;
