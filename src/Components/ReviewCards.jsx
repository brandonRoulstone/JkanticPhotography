import React from 'react'
import PropTypes from 'prop-types';
// https://cdn-images.imagevenue.com/77/f2/ff/ME17Y38K_o.jpg
const ReviewCards = ({name, photo, review}) => {
  return (
    <div id="card" className="mb-3">
        
        <div>
         <img src={photo} alt="pexels-ej-agumbay-6612869.jpg" className="img img-fluid" width={100} height={100} loading="lazy" id="profileImage"/>
        </div>

        <div className="container">
            <span id="userName">{name}</span>
            <br />
            <span id="userReviews" className="small">1 review</span>
            <br />
            <div id="userRating" className="small">
                <div id="stars">
                    <div class="rating">
                        <input value="5" name="rate" id="star5" type="radio" />
                        <label title="text" for="star5"></label>
                        <input value="4" name="rate" id="star4" type="radio" />
                        <label title="text" for="star4"></label>
                        <input value="3" name="rate" id="star3" type="radio" checked="" />
                        <label title="text" for="star3"></label>
                        <input value="2" name="rate" id="star2" type="radio" />
                        <label title="text" for="star2"></label>
                        <input value="1" name="rate" id="star1" type="radio" />
                        <label title="text" for="star1"></label>
                    </div>
                </div>
                <span className="small mx-3">a year ago</span>
            </div>
            <span id="userTxt">{review}</span>
        </div>
    </div>
  )
}

ReviewCards.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired
}

export default ReviewCards
