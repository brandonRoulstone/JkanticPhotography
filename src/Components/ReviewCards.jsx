import React from 'react'
import PropTypes from 'prop-types';

const ReviewCards = ({name, photo, review, reviews}) => {
  return (
    <div id="card" className="m-2">
        
        <div>
         <img src={photo} alt="pexels-ej-agumbay-6612869.jpg" className="img img-fluid" width={100} height={100} loading="lazy" id="profileImage"/>
        </div>

        <div className="container">
            <span id="userName">{name}</span>
            <br />
            <span id="userReviews" className="small">{reviews <= 1 ? reviews + ' review' : reviews + ' reviews'}</span>
            <br />
            <div id="userRating" className="small">
                <div id="stars">
                    <div className="rating">
                        <input value="5" name="rate" id="star5" type="radio" />
                        <label title="text" htmlFor="star5"></label>
                        <input value="4" name="rate" id="star4" type="radio" />
                        <label title="text" htmlFor="star4"></label>
                        <input value="3" name="rate" id="star3" type="radio" />
                        <label title="text" htmlFor="star3"></label>
                        <input value="2" name="rate" id="star2" type="radio" />
                        <label title="text" htmlFor="star2"></label>
                        <input value="1" name="rate" id="star1" type="radio" />
                        <label title="text" htmlFor="star1"></label>
                    </div>
                </div>
                <span className="small mx-3">a year ago</span>
            </div>
            <div id="userTxt">{review}</div>
        </div>
    </div>
  )
}

ReviewCards.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired
}

export default ReviewCards
