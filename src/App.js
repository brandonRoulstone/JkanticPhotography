import './App.css';
import React, { Suspense } from 'react';
import Navigation from './Components/Navigation';
import LandingPage from './Components/LandingPage';
import AboutPage from './Components/AboutPage';
import CompanyMission from './Components/CompanyValues';
import CompanyValues from './Components/CompanyValues';
import JkanticWork from './Components/JkanticWork';
import JkanticReviews from './Components/ReviewsPage';

function App() {

  return (
    <div className="App">
      <Navigation />
        <section id="home">

          <LandingPage />

        </section>
  
        <section id="about">

          <AboutPage />

        </section>
  
        <section id="ourMission">

          <CompanyMission />

        </section>
        <section id="ourValues">

          <CompanyValues />

        </section>
        <section id="OurWork">

          <JkanticWork />

        </section>
        <section id="Reviews">

          <JkanticReviews />

        </section>
 
    </div>
  );
}

export default App;
