import React from 'react';

import { AboutMe, FindUs, Footer, Gallery, Header, Services, Information } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutMe />
    <Services />
    <Information />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
