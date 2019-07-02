import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Headings from '../components/headings';
import Projectcard from '../components/projectcard';

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
  }
`;

export default class projects extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <Headings title="Projects" />

        <ProjectsContainer>
          <StaticQuery
            query={PROJECTS_QUERY}
            render={data => data.site.siteMetadata.projects.map(project => (
              <Projectcard name={project.name} key={project.name} link={project.link} techStack={project.techStack} />
            ))
            }
          />
        </ProjectsContainer>

        {/* <Arrow>&gt;</Arrow> */}
      </Layout>
    );
  }
}

const ProjectsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: max-content;
  grid-gap: 2rem;
  position: relative;
  /* overflow-x: auto; */
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
