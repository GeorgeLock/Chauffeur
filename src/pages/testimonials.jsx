import React from "react";
import Helmet from "react-helmet";
import { Grid, Cell } from "react-md";
import config from "../../data/SiteConfig";
const TestimonialsPage = ({ data }) => {
  return (
    <div className="container">
      <Helmet>
        <title>{`Testimonials | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/testimonials/`} />
      </Helmet>
      <Grid>
        {data.allMarkdownRemark.edges.map(testimonial => (
          <Cell size={4} key={testimonial.node.id}>
            <h2 className="display-4">{testimonial.node.frontmatter.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.html }}
            />
          </Cell>
        ))}
      </Grid>
    </div>
  );
};

export default TestimonialsPage;

export const pageQuery = graphql`

  query Testimonials{

      allMarkdownRemark( sort: { order: DESC, fields: [frontmatter___date]},
          filter: {fileAbsolutePath: {regex: "../(testimonials)/.*\\.md$/"}}){
        edges{
          
          node{
            id
            frontmatter{
              title
              cover
              
            }
          }
        }
      }
   
    }
`;
