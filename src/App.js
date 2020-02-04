import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';
import ParallaxBackground from '@components/ParallaxBackground';
import ScrollTop from '@components/ScrollTop';
import ThemeSwitcher from '@components/ThemeSwitcher';
import Browser from '@components/Browser';
import Footer from '@components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="dev-landing-page">
            <ThemeSwitcher>
              <Browser except firefox>
                <ParallaxBackground />
              </Browser>
              <LandingPage />
              <AboutPage />
              <PortfolioPage />
              <ScrollTop />
              <Footer />
            </ThemeSwitcher>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
