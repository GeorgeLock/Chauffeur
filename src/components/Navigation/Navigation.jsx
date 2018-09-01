import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import ToolbarActions from '../ToolbarActions/ToolbarActions';
import PageTransition from 'gatsby-plugin-page-transitions';
import Footer from '../Footer/Footer';
import GetNavList from './NavList';
import Header from '../Header/Header';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    const { children, config, LocalTitle } = this.props;
    const footerLinks = LocalTitle;

    return (
      <NavigationDrawer
        drawerTitle={config.siteTitleAlt}
        toolbarTitle={LocalTitle}
        contentClassName="main-content"
        navItems={GetNavList(config)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarActions={<ToolbarActions config={config} />}
      >
        <Header
          localTitle={this.props.LocalTitle}
          testimonialEdges={this.props.testimonialEdges}
        />

        <div className="main-container">{children}</div>
        <Footer userLinks={footerLinks} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
