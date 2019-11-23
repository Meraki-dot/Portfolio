import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I like <b>JavaScript</b> and
              everything <b>tech</b>.
            </p>
            <p>
              When my dev senses kick-in I build presumably{' '}
              <b> awesome stuff</b>. I am always learning, always improving, always adapting and always building.
            </p>
            <p>
              React, React-Redux and Javascript are the main tricks up my sleeve. I am also obsessed with making the web look pretty with SASS/CSS.
            </p>
            <p>
              I'm a lover of video games, particularly MMORPGs and enjoy socializing and interacting with the people I meet.
            </p>
            <p>
              I'm an obsessive basketball fan and can go hours and hours talking about why LeBron James is better than Michael Jordan.
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
