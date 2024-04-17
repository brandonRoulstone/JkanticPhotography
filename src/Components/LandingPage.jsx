import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
  return (
    <div className="" id="landingPageJsx">
      <div id="">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Cultivating a world of proud African Brands.',
            1000,
            'We specialize in advertisement.',
            1000,
            'We specialize in content creation.',
            1000,
            'We specialize in Social media management.',
            1000,
            'We deliver quality & excellence.',
            1000,
          ]}
          speed={50}
          style={{ fontSize: '1.5em' }}
          repeat={Infinity}
          className="typer"
        />
        <h1 className="display-1" id="madaFont">JKANTIC.</h1>
        <div className="d-flex gap-3 justify-content-center">
          <a href="#about" className="btn text-black" id="btn">Explore our site</a>
          <a href="#OurWork" className="btn text-black" id="btn">Explore our work</a>
        </div>
      </div>
      <div id="">
        <img className='img img-fluid' src="https://i.postimg.cc/R0yvRRkw/JKantic-Logo-3.png" alt="Jkantic_branded_logo" id="logo" loading="lazy"/>
      </div>
    </div>
  )
}

export default LandingPage;
