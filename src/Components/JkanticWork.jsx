// import  OffcanvasComp from "./OffcanvasComp"
// import GalleryCarousel from "./GalleryCarousel"
import videoMizuno from "../assets/Muzino Ad.mp4";
const JkanticWork = () => {
    return (

        <>
            <section id="companyWork">

                <div className="container-fluid d-flex justify-content-evenly gap-4" id="wrap">
                
                    <div className="d-flex row" id="bcgImg1">
                        <div id="custom">

                            <div id="br">
                                <h4 className="px-2 pt-1">Welcome to Our gallery</h4>
                                <br />
                                <p className="px-2">Photography</p>
                            </div>

                            <button className="btn border text-white" data-blur>view our work</button>
                            
                        </div>
                    </div>
                
                    <video controls="false" autoplay loop muted src={videoMizuno} className="d-flex row" id="bcgImg2">
                    </video>

                </div>

            </section>
        </>

    )
}


export default JkanticWork
