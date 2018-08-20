import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import Link from 'gatsby-link';

function GetNavList(config) {
  const NavList = [
    {
      primaryText: 'Home',
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: '/'
    },
    {
      primaryText: 'About',
      leftIcon: <FontIcon>person</FontIcon>,
      component: Link,
      to: '/about/'
    },
    {
      primaryText: 'Services',
      leftIcon: <FontIcon>commute</FontIcon>,
      component: Link,
      to: '/services/'
    },
    {
      primaryText: 'Contact',
      leftIcon: <FontIcon>contact_mail</FontIcon>,
      component: Link,
      to: '/contact/'
    },
    {
      divider: true
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: 'i',
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  return NavList;
}
export default GetNavList;
