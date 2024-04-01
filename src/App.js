import './App.css';
import React, { Suspense } from 'react';
import Navigation from './Components/Navigation';

function App() {
  const LandingPage = React.lazy(() => import('./Components/LandingPage'));
  const AboutPage = React.lazy(() => import('./Components/AboutPage'));
  const CompanyMission = React.lazy(() => import('./Components/CompanyMission'));
  const CompanyValues = React.lazy(() => import('./Components/CompanyValues'));
  const JkanticWork = React.lazy(() => import('./Components/JkanticWork'));
  const JkanticReviews = React.lazy(() => import('./Components/ReviewsPage'));

  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
