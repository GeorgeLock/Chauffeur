import React from 'react';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import config from '../../data/SiteConfig';

import 'font-awesome/css/all.css';
import favIcon from '../favicon.png';
import './index.scss';
import './global.scss';
import './bootstrap-grid.min.css';
export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/';
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, '')
      .replace('/', '');
    let title = '';

    if (currentPath === '') {
      title = 'Home';
    } else if (currentPath === 'tags') {
      title = 'Tags';
    } else if (currentPath === 'categories') {
      title = 'Categories';
    } else if (currentPath === 'about/') {
      title = 'About';
    } else if (currentPath === 'services/') {
      title = 'Services';
    } else if (currentPath.includes('posts')) {
      title = 'Article';
    } else if (currentPath.includes('tags')) {
      const tag = currentPath
        .replace('tags', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes('categories')) {
      const category = currentPath
        .replace('categories', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <Navigation config={config} LocalTitle={this.getLocalTitle()}>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <link rel="shortcut icon" type="image/png" href={favIcon} />
            <Header />
          </Helmet>
          {children()}
        </div>
      </Navigation>
    );
  }
}
