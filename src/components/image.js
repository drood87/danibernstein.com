/* eslint-disable max-len */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


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
