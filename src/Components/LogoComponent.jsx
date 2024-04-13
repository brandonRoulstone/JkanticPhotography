import React from 'react'
import PropTypes from 'prop-types';


const LogoComponent = ({logo}) => {
  return (
    <div id='mediaResponsiveLogo'>
      {logo}
    </div>
  )
}
LogoComponent.propTypes = {
    logo: PropTypes.string.isRequired,
}

export default LogoComponent
