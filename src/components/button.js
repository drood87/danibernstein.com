import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  border: none;
  margin: 0 2rem 0 0;
  padding: 0.7rem 3rem;
  width: auto;
  overflow: visible;
  cursor: pointer;
  background: transparent;
  display: inline-block;
  /* background-color: #fa8231; */
  border-radius: 30px;
  border: 2px solid #fa8231;

  /* inherit font & color from ancestor */
  color: #fff;
  font: inherit;

  /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable 'input' types in iOS */
  -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

const Button = ({ directTo }) => <ButtonStyled type="button">{directTo}</ButtonStyled>;

Button.propTypes = {
  directTo: PropTypes.string.isRequired,
};

export default Button;
