import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const ServiceSale = ({heading, title, productsInfo, price}) => {
  return (
    <div>
      <Card border="info" style={{ width: '18rem', height: '20rem' }} className="m-2" id="product">
        <Card.Header>{heading}</Card.Header>
        <Card.Body>
          <Card.Title className="fs-4 fw-bold">{title}</Card.Title>
            <Card.Text className="h-50">
              {productsInfo}
            </Card.Text>
            <hr />
            <Card.Text className="d-flex justify-content-end fs-4 fw-bold" id="priceTag">
              Price : R {price}
            </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

ServiceSale.propTypes = {
    heading: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    productsInfo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default ServiceSale
