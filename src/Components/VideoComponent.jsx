import videoOne from '../assets/Adidas Spec Advertisment.mp4';
import videoTwo from '../assets/AudiRS7.mp4';
import videoThree from '../assets/BMW CAPE TOWN CITY SHOWCASE.mp4';
import videoFour from '../assets/Energade Spec Commercial V1.mp4';
import videoFive from '../assets/Kill Pest Cinematic Ad.mp4';
import videoSix from '../assets/Muzino Ad.mp4';
import videoSeven from '../assets/PUMA SPEC AD1080P.mp4';

const VideoComponent = () => {
  return (
    <div id="flex" className="mt-2 row">
        <video
          controls
          id="vidHeightWidth"                       
          autoplay              
          loop
          className="mb-3"                 
          muted       
          src={videoOne}
        >
        </video>
        <video
          controls
          id="vidHeightWidth"                       
          autoplay              
          loop
          className="mb-3"                 
          muted       
          src={videoTwo}
        >
        </video>
        <video
          controls
          id="vidHeightWidth"                       
          autoplay              
          loop
          className="mb-3"                 
          muted       
          src={videoThree}
        >
        </video>
        <video
          controls
          id="vidHeightWidth"                       
          autoplay              
          loop
          className="mb-3"                 
          muted       
          src={videoFour}
        >
        </video>
        {/* stretched video height is not consistent */}
        <video
          controls
          id="vidHeightWidth"                       
          autoplay              
          loop
          className="mb-3"                 
          muted       
          src={videoFive}
        >
        </video>
        <video
          controls
          id="vidHeightWidth"                       
          autoplay              
          loop
          className="mb-3"                 
          muted       
          src={videoSix}
        >
        </video>
        <video
          controls
          id="vidHeightWidth"                       
          autoplay              
          loop
          className="mb-3"                 
          muted       
          src={videoSeven}
        >
        </video>
    </div>
  )
}

export default VideoComponent;
