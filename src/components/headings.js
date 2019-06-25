import React from 'react';
import PropTypes from 'prop-types';

const Headings = ({ title }) => <h1>{title}</h1>;

export default Headings;

Headings.propTypes = {
  title: PropTypes.string.isRequired,
};
