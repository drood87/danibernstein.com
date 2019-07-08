// @ts-nocheck
import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Headings from '../components/headings';
import Projectcard from '../components/projectcard';
import { media } from '../components/breakpoints';

export default class projects extends Component {
  render() {
    // const images = data.allImageSharp.node;
    return (
      <Layout>
        <SEO title="Projects" />
        <ProjectSiteWrapper>
          <Headings title="Projects" style={{ marginBottom: '5rem' }} />

          <ProjectsContainer>
            <StaticQuery
              query={PROJECTS_QUERY}
              render={({ site, allImageSharp }) => site.siteMetadata.projects.map((project, i) => (
                <Projectcard
                  name={project.name}
                  key={project.name}
                  link={project.link}
                  techStack={project.techStack}
                  img={allImageSharp.edges[i].node}
                />
              ))
              }
            />
          </ProjectsContainer>
        </ProjectSiteWrapper>

        {/* <Arrow>&gt;</Arrow> */}
      </Layout>
    );
  }
}

const ProjectSiteWrapper = styled.div`
  margin-top: -80px;

  ${media.desktop`
    margin-top: 16px;
  `}
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: max-content;
  grid-gap: 2rem;
  position: relative;
  /* overflow-x: auto; */

  ${media.desktop`
   display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-flow: row;
  justify-content: center;
  justify-items: center;
  grid-gap: 1rem;
  `}

  ${media.tablet`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-flow: row;
  justify-content: center;
  justify-items: center;
  grid-gap: 1rem;

  `}
`;

const PROJECTS_QUERY = graphql`
  query Projects {
    site {
      siteMetadata {
        projects {
          name
          link
          techStack
        }
      }
    }
    allImageSharp(filter: { fluid: { src: { regex: "/png/" } } }, sort: { fields: [original___src], order: ASC }) {
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

// const Arrow = styled.div`
//   position: sticky;
//   right: 0;
//   background-color: rgba(17, 17, 17, 0.4);
//   height: 93%;
//   width: 2rem;
//   justify-content: center;
//   font-size: 2rem;

//   display: flex;
//   align-items: center;
//   /* bottom: -10%; */
// `;
