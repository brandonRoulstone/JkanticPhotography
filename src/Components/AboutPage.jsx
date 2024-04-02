import DividerLine from "./DividerLine";

const AboutPage = () => {
    const dataObject = {
        subTxt: 'Cultivating a world of leading proud African brands!',
        aboutJkantic : 'Jkantic is a specialized advertisement content creation and Social Media Managment business focuses on delivering industry commercial production and Social Media growth solutions to small and medium-sized businesses.',
        paragraphOne : 'JKantic was established in 2021 by an ambitious self-taught individual when it emerged as a passion-driven hobby that soon evolved into a business.Our journey began with portraits.Over time it evolved into a respected media solution business that includes photography, videoography, and social media management.',
        paragraphTwo: `In the journey to date, we had opportunities to work with establishment brands; Nederburg wine's 5-episode campaign to introduce its new flavours paired with South African cousins, Fyto launching new essential oil products, The Nuttery establishing a robust social media presence, Motus Nissan & Renault building an online presence, and many more(View links below).`,
        paragraphThree: 'Through these partnerships, these new brands witnessed a remarkable transformation in their online visual representation, elevating their image and becoming highly valued by their customers.'
    }
  return (
    <>
        <section id="aboutPage" loading='lazy'>

            <div id="boxx" className="px-5 col-lg-6 col-sm-12 m-2 text-center">
                <div className="d-flex justify-content-center">
                <DividerLine dividerWidth={30}/>
                </div>
                <div className="py-5">
                    <h1>WHAT DO WE DO?</h1>
                    <p className="text-black-50">{dataObject.subTxt}</p>
                    <hr />
                    <div className="">
                        <p className="lead fw-normal">{dataObject.aboutJkantic}</p>
                    </div>
                    <div>
                        <a href="#companyHistory" className="btn bg-black text-white">Company history</a>
                    </div>
                </div>
            </div>

        </section>
        <section id="companyHistory">

            <div className="row featurette mx-4 my-2">
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
        </section>
        
    </>
  )
}

export default AboutPage
