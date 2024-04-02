import './App.css';
import Navigation from './Components/Navigation';
import LandingPage from './Components/LandingPage';
import AboutPage from './Components/AboutPage';
import CompanyMission from './Components/CompanyMission';
import CompanyValues from './Components/CompanyValues';
import JkanticWork from './Components/JkanticWork';
import JkanticReviews from './Components/ReviewsPage';
import CompanyServices from './Components/CompanyServices';

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
        <section id="Services">

          <CompanyServices />

        </section>
 
    </div>
  );
}

export default App;
