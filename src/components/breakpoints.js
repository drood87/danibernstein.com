/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import styled, { css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 960,
  tablet: 768,
  phone: 376,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(
    // @ts-ignore
    ...args,
  )}
    }
  `;
  return accumulator;
}, {});
