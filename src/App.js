import './App.css';
import Navigation from './Components/Navigation';
import LandingPage from './Components/LandingPage';
import AboutPage from './Components/AboutPage';
// import CompanyMission from './Components/CompanyMission';
// import CompanyValues from './Components/CompanyValues';
// import JkanticWork from './Components/JkanticWork';
// import CompanyServices from './Components/CompanyServices';
import JkanticReviews from './Components/ReviewsPage';
import '@coreui/coreui/dist/css/coreui.min.css';

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
  
        {/* <section id="ourMission">

          <CompanyMission />

        </section>
        <section id="ourValues">

          <CompanyValues />

        </section> */}
        {/* <section id="OurWork">

          <JkanticWork />

        </section> */}
        <section id="Reviews">

          <h1 className="text-center">Client Reviews</h1>

          <JkanticReviews />

        </section>
        {/* <section id="Services">

          <CompanyServices />

        </section> */}
 
    </div>
  );
}

export default App;
