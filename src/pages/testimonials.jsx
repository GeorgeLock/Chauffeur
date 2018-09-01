import React from 'react';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';
import {
  Grid,
  Cell,
  Avatar,
  Button,
  Card,
  CardActions,
  CardText,
  CardTitle
} from 'react-md';
import config from '../../data/SiteConfig';

const styles = {
  maxWidth: 900,
  maxHeight: 900
};
const TestimonialsPage = ({ data }) => {
  return (
    <PageTransition transitionTime={300}>
      <div className="container-fluid" id="testimonials">
        <Helmet>
          <title>{`Testimonials | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/testimonials/`} />
        </Helmet>
        <h1 className="display-3 text-center page-heading">Testimonials</h1>
        <div className="content-main">
          <Grid>
            {data.allMarkdownRemark.edges.map(testimonial => (
              <Cell size={6} tabletSize={4} key={testimonial.node.id}>
                <Card className="md-block-centered">
                  <CardTitle
                    title={testimonial.node.frontmatter.title}
                    avatar={
                      <img
                        className="img-logo d-md-none d-lg-block"
                        src={testimonial.node.frontmatter.cover}
                        alt={`Chauffeur Travel testimonial from ${
                          testimonial.node.frontmatter.title
                        }`}
                      />
                    }
                  />
                  <CardText>
                    <div
                      className="md-caption text-center"
                      dangerouslySetInnerHTML={{
                        __html: testimonial.node.html
                      }}
                    />
                  </CardText>
                </Card>
              </Cell>
            ))}
          </Grid>
        </div>
      </div>
    </PageTransition>
  );
};

export default TestimonialsPage;

export const pageQuery = graphql`

  query Testimonials{

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
