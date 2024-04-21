import  VideoGalleryBtn from "./VideoGallery"
import PhotographyGalleryBtn from "./PhotoGallery";
// import GalleryCarousel from "./GalleryCarousel"
import videoMizuno from "../assets/Muzino Ad.mp4";
const JkanticWork = () => {
    return (

        <>
            <section id="companyWork">

                <div className="container-fluid d-flex justify-content-evenly gap-4" id="wrap">

                    <div>
                        <div className="d-flex row" id="bcgImg1">
                        </div>
                        <hr />
                        <div className="fs-4 d-flex justify-content-center" id="wrapBrands">
                            <PhotographyGalleryBtn />
                            <div className="pt-2 ms-auto" id="icons">
                                <i id="ic" className="fa-brands fa-instagram mx-2"></i>
                                <i id="ic" className="fa-brands fa-facebook mx-2"></i>
                                <i id="ic" className="fa-brands fa-tiktok mx-2"></i>
                            </div>
                        </div>
                    </div>

                    <div>
                        <video controls autoPlay loop muted src={videoMizuno} className="d-flex row" id="bcgImg2">
                        </video>
                        <hr />
                        <div className="fs-4 d-flex justify-content-center" id="wrapBrands">
                            <VideoGalleryBtn />
                            <div className="pt-2 ms-auto" id="icons">
                                <i id="ic" className="fa-brands fa-instagram mx-2"></i>
                                <i id="ic" className="fa-brands fa-facebook mx-2"></i>
                                <i id="ic" className="fa-brands fa-tiktok mx-2"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}


export default JkanticWork
