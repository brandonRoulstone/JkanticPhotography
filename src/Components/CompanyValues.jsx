// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const CompanyValues = () => {
  const data = {
    heading: 'Our Values',
    SubHeadingOne : 'African Excellence',
    SubTxtOne : 'A commitment to deliver the highest standard that embodies the pride of all that it means to be African.',
    SubHeadingTwo : 'Integrity',
    SubTxtTwo : 'We aim to be honest and have a strong moral principle - consistency of actions, values, methods, measures, principles, expectations, and outcomes.',
    SubHeadingThree : 'Customer Centric',
    SubTxtThree : "We center the solution around the customer.Each creative process speaks to the uniqueness of the customer's identity",
  }
  return (
    <>
      <div id="CompanyValues" className="container">

        <div className="row featurette">

          <div className="col-md-7 order-md-2">

            <h2 className="featurette-heading display-4 fw-normal lh-1 mb-4">Our Values</h2>

            <h5 className="featurette-heading fw-bold"><i className="fa-solid fa-earth-africa fa-lg" style={{color: '#000000'}}></i> {data.SubHeadingOne}</h5>
            <p className="lead">{data.SubTxtOne}</p>

            <h5 className="featurette-heading fw-bold"><i className="fa-solid fa-handshake fa-lg" style={{color: '#000000'}}></i> {data.SubHeadingTwo}</h5>
            <p className="lead">{data.SubTxtTwo}</p>

            <h5 className="featurette-heading fw-bold"><i className="fa-solid fa-circle-user fa-lg" style={{color: '#000000'}}></i> {data.SubHeadingThree}</h5>
            <p className="lead">{data.SubTxtThree}</p>

          </div>

          <div className="col-md-5 order-md-1">
            <img src="https://cdn-images.imagevenue.com/d8/ea/75/ME17V0FC_o.png" alt="62ba3958b201c1a464247694_BEC-Core-Values.png" loading="lazy" className="img img-fluid mx-auto shadow" width="500" height="500"/>
          </div>
        </div>
      </div> 
    </>
  )
}

export default CompanyValues;
