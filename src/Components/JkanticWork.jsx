import  OffcanvasComp from "./OffcanvasComp"
const JkanticWork = () => {
  return (
  
    <section id="companyWork" className="col">
        <div id="divamation"></div>
        <div className="col-lg-8 col-md-11 d-flex" id="mediaQ">
            <div>
                <img src="https://cdn-images.imagevenue.com/77/f2/ff/ME17Y38K_o.jpg" alt="pexels-ej-agumbay-6612869.jpg" className="img img-fluid shadow rounded-3" width={500} height={500} loading="lazy" id="mediaImg"/>
            </div>
            <div className="text-black">
                <div className="ms-auto px-5 mt-3">
                    <h1 className="display-3" id="mediaTxt">See our work</h1>
                    <br />
                    <div className="d-flex">
                        <p id="styleTxt">Instagram</p>
                        <p className="ms-auto"><a href="#insta" className="text-decoration-none text-black">@JKantic</a></p>
                    </div>
                    <div className="d-flex">
                        <p id="styleTxt">Our work</p>
                        <div className="ms-auto"><OffcanvasComp/></div>
                    </div>
                    <div className="d-flex">
                        <p id="styleTxt">Our pricing</p>
                        <p className="ms-auto"><a href="#Services" className="text-decoration-none text-black">click here</a></p>
                    </div>
                    <div className="d-flex">
                        <p id="styleTxt">Latest reviews</p>
                        <p className="ms-auto"><a href="#Reviews" className="text-decoration-none text-black">click here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default JkanticWork
