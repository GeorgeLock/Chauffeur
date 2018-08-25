import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "About",
      subheader: true
    },
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Testimonials",
      leftIcon: <FontIcon>person</FontIcon>,
      component: Link,
      to: "/testimonials/"
    },

    {
      divider: true
    },
    {
      primaryText: "Services",
      subheader: true
    },
    {
      primaryText: "Business",
      leftIcon: <FontIcon>business_center</FontIcon>,
      component: Link,
      to: "/business/"
    },
    {
      primaryText: "Airports",
      leftIcon: <FontIcon>local_airport</FontIcon>,
      component: Link,
      to: "/airports/"
    },
    {
      primaryText: "Events",
      leftIcon: <FontIcon>event</FontIcon>,
      component: Link,
      to: "/events/"
    },
    {
      primaryText: "Students",
      leftIcon: <FontIcon>book</FontIcon>,
      component: Link,
      to: "/students/"
    },
    {
      primaryText: "Weddings",
      leftIcon: <FontIcon>directions_car</FontIcon>,
      component: Link,
      to: "/weddings/"
    },

    {
      divider: true
    },
    {
      subheader: true,
      primaryText: "Contact"
    },
    {
      primaryText: "Enquiry",
      leftIcon: <FontIcon>mail_outline</FontIcon>,
      component: Link,
      to: "/contact/"
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "i",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  return NavList;
}
export default GetNavList;
