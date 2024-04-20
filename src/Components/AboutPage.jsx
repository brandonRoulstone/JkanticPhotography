// import DividerLine from "./DividerLine";
import CarouselComp from "./CarouselComp";

const AboutPage = () => {
    // const dataObject = {
    //     subTxt: 'Cultivating a world of leading proud African brands!',
    //     aboutJkantic : 'Jkantic is a specialized advertisement content creation and Social Media Managment business focuses on delivering industry commercial production and Social Media growth solutions to small and medium-sized businesses.',
    //     paragraphOne : 'JKantic was established in 2021 by an ambitious self-taught individual when it emerged as a passion-driven hobby that soon evolved into a business.Our journey began with portraits.Over time it evolved into a respected media solution business that includes photography, videoography, and social media management.',
    //     paragraphTwo: `In the journey to date, we had opportunities to work with establishment brands; Nederburg wine's 5-episode campaign to introduce its new flavours paired with South African cousins, Fyto launching new essential oil products, The Nuttery establishing a robust social media presence, Motus Nissan & Renault building an online presence, and many more(View links below).`,
    //     paragraphThree: 'Through these partnerships, these new brands witnessed a remarkable transformation in their online visual representation, elevating their image and becoming highly valued by their customers.'
    // }
  return (
    <>
        <section id="aboutPage">

            <div className="container-fluid">
             <CarouselComp />
            </div>

        </section>

        <section id="companyHistory" className="col-lg-12 container-fluid">
            <div>

             <div id="imgbox">

                <img className="img img-fluid" src="https://cdn-images.imagevenue.com/9f/17/5d/ME182K63_o.jpg" alt="IMG-20240410-WA0023.jpg" id="imgResponsive" loading="lazy"/>

             </div>

             <div id="fmt">
                
                <h2 className="small fs-4 mt-3">Photography</h2>

                <a href="#home"><button className="btn mb-2" id="button">View Pricing</button></a>

             </div>

            </div>

            <div>

              
              <div id="imgbox">
              
                <img className="img img-fluid" src="https://cdn-images.imagevenue.com/a9/05/51/ME182OE5_o.jpg" alt="IMG-20240410-WA0007.jpg" id="imgResponsive" loading="lazy"/>
              
              </div>  

              
              <div id="fmt">
              
                <h2 className="small fs-4 mt-3">Brand Marketing</h2>
              
                <a href="#home"><button className="btn mb-2" id="button">View Pricing</button></a>
              
              </div>

            </div>

            <div>

            
                <div id="imgbox">

                    <img className="img img-fluid" src="https://cdn-images.imagevenue.com/41/12/b8/ME182C58_o.jpg" alt="IMG-20240410-WA0023.jpg" id="imgResponsive" loading="lazy"/>

                </div>

                
                <div id="fmt">
                
                    <h2 className="small fs-4 mt-3">Videography</h2>

                    <a href="#home"><button className="btn mb-2" id="button">View Pricing</button></a>
                
                </div>

            </div>
        </section>
        
    </>
  )
}

export default AboutPage
