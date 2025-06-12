import React from 'react';
import Landingpage from '../../components/LandingPage/landingpage';
import About from '../../components/About/about';
import Work from '../../components/Work/work';
import Contact from '../../components/contact/contact';

const Home = () => {
  return (
    <div>
      <Landingpage />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
