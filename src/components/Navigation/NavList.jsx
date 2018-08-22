import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import Link from 'gatsby-link';

function GetNavList(config) {
  const NavList = [
    {
      primaryText: 'About',
      subheader: true
    },
    {
      primaryText: 'Home',
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: '/'
    },
    {
      primaryText: 'Testimonials',
      leftIcon: <FontIcon>person</FontIcon>,
      component: Link,
      to: '/testimonials/'
    },
    
    {
      divider: true
    },
    {
      primaryText: 'Services',
      subheader: true
    },
    {
      primaryText: 'Services',
      leftIcon: <FontIcon>commute</FontIcon>,
      component: Link,
      to: '/services/'
    },

  {
    divider: true
  },
    {subheader: true,
    primaryText: 'Contact'},
    {
      primaryText: 'Contact',
      leftIcon: <FontIcon>contact_mail</FontIcon>,
      component: Link,
      to: '/contact/'
    },

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
