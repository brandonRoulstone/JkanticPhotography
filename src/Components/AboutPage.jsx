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
             <CarouselComp className=""/>
            </div>


            {/* <div className="container col-xxl-12 px-4 py-2">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    
                </div>
                <div className="col-lg-6 py-4">
                    <p className="text-black-50 text-center">{dataObject.subTxt}</p>
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About our company</h1>
                     <div className="d-flex justify-content-start">
                        <DividerLine/>
                     </div>
                    <p className="lead fw-normal my-2">{dataObject.aboutJkantic}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
                </div>
            </div> */}

        </section>
        {/* <section id="companyHistory">

            <div className="row featurette mx-4">
                <div className="col-md-7" id="borderLeft">

                    <h2 className="featurette-heading fw-normal display-3">Company History</h2>

                    <p className="lead">{dataObject.paragraphOne}</p>
                    <p className="lead">{dataObject.paragraphTwo}</p>
                    <p className="lead">{dataObject.paragraphThree}</p>

                </div>

                <div className="col-md-5">

                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow" width="500" height="500" src="https://i.postimg.cc/81YJYkNb/pexels-anna-nekrashevich-6801648.jpg" loading="lazy" alt="JKANTIC_company_history"/>

                    <div className="d-flex justify-content-start gap-2 mt-2 fw-bold">
                     Links: 
                     <a href="#home">Nederburg,</a> 
                     <a href="#home">PhatCat,</a> 
                     <a href="#home">Audi</a>
                    </div>
                </div>
            </div>
        </section> */}

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
              
                <img className="img img-fluid" src="https://cdn-images.imagevenue.com/10/0c/ee/ME182KO4_o.jpg" alt="IMG-20240410-WA0023.jpg" id="imgResponsive" loading="lazy"/>
              
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
