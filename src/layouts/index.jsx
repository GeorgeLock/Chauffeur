import React from "react";
import Helmet from "react-helmet";

import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import config from "../../data/SiteConfig";

import favIcon from "../favicon.png";
import "./index.scss";
import "./global.scss";
import "./bootstrap-grid.min.css";
export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";

    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags") {
      title = "Tags";
    } else if (currentPath === "categories") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath === "business/") {
      title = "Business";
    } else if (currentPath === "airports/") {
      title = "Airports";
    } else if (currentPath === "events/") {
      title = "Events";
    } else if (currentPath === "testimonials/") {
      title = "Testimonials";
    } else if (currentPath === "weddings/") {
      title = "Weddings";
    } else if (currentPath === "contact/" || currentPath === "contact") {
      title = "Contact";
    } else if (currentPath.includes("posts")) {
      title = "Article";
    } else if (currentPath.includes("tags")) {
      const tag = currentPath
        .replace("tags", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes("categories")) {
      const category = currentPath
        .replace("categories", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <Navigation
        testimonialEdges={this.props.data.allMarkdownRemark.edges}
        config={config}
        LocalTitle={this.getLocalTitle()}
      >
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <link rel="shortcut icon" type="image/png" href={favIcon} />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
              integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
              crossorigin="anonymous"
            />
          </Helmet>

          {children()}
        </div>
      </Navigation>
    );
  }
}

export const pageQuery = graphql`

  query TestimonialsMain{

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
