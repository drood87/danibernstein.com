/* eslint-disable max-len */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
  <StaticQuery
    query={IMAGE_QUERY}
    render={data => data.allImageSharp.edges.map(edge => <Img fluid={edge.node.fluid} key={edge.node.id} />)}
  />
);
export default Image;

const IMAGE_QUERY = graphql`
  query Images {
    allImageSharp(filter: { fluid: { src: { regex: "/pic/" } } }) {
      edges {
        node {
          id
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
