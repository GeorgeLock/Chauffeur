import React from 'react';
import Helmet from 'react-helmet';
import TestimonialSlider from '../components/Sliders/TestimonialSlider';
import SEO from '../components/SEO/SEO';
import PageTransition from 'gatsby-plugin-page-transitions';
import config from '../../data/SiteConfig';
import Home from '../components/Content/Home';
class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const fileEdges = this.props.data.allFile.edges;
    return (
      <PageTransition transitionTime={300}>
        <div>
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>

          <Home>
            <TestimonialSlider testimonialEdges={postEdges} />
          </Home>
        </div>
      </PageTransition>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allFile {
      edges {
        node {
          id
          absolutePath
          childImageSharp {
            id
            resolutions {
              base64
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
            internal {
              contentDigest
              type
              owner
            }
            sizes(maxWidth: 1240) {
              ...GatsbyImageSharpSizes
              originalName
            }
          }
        }
      }
    }
    allMarkdownRemark( sort: { order: DESC, fields: [frontmatter___date]},
      filter: {fileAbsolutePath: {regex: "../(testimonials)/.*\\.md$/"}}){
        edges{
         
      node{
        html
        id
        frontmatter{
          title
          cover
        }
        excerpt
      }
     
    }
  }

    }
  
`;
