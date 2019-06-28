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
              <Projectcard name={project.name} link={project.link} techStack={project.techStack} />
            ))
            }
          />
        </ProjectsContainer>
      </Layout>
    );
  }
}

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-auto-flow: column;
  grid-template-rows: max-content;
  grid-gap: 2rem;
  overflow-x: auto;
`;
