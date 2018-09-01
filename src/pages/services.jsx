import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
const ServicesPage = () => {
  return (
    <PageTransition transitionTime={300}>
      <div>
        <h2 className="display-4">Student Chaperone Services</h2>
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
