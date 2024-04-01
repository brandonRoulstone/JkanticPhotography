import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const ServiceSale = ({heading, title, productsInfo, price}) => {
  return (
    <div>
        <Card border="info" style={{ width: '18rem' }} className="m-2">
            <Card.Header>{heading}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {productsInfo}
                </Card.Text>
                <Card.Text>
                    {price}
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
