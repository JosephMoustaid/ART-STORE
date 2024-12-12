import React from 'react';
import PropTypes from 'prop-types';
import { BsCart  } from 'react-icons/bs'; // Import the Basket icon

const Card = ({ image, title, subtitle, location, dateRange }) => {
  return (
    <div className="card-container d-flex flex-column justify-center mb-2">
      <div className="card-image m-auto">
        <img src={image} alt={title} />
      </div>
      <div className="card-content text-start m-auto mb-0 w-100">
        <h5 className="card-title mt-2">{title}</h5>
        <p className="card-subtitle">{subtitle}</p>

        <div className='d-flex justify-content-between align-items-center mt-0'>
            <strong className='me-3'>700 Dhs</strong>
            <a href="/basket" className='btn btn-primary fs-6'>
            <BsCart  /> 
            </a>
        </div>
      </div>
      
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  location: PropTypes.string,
  dateRange: PropTypes.string,
};

Card.defaultProps = {
  image: 'https://i0.wp.com/unleash-gods-dream.com/wp-content/uploads/2023/03/placeholder-image-blue-square.png?fit=500%2C500&ssl=1&w=640',
  title: 'Default Title',
  subtitle: 'Default Subtitle',
  location: 'Default Location',
  dateRange: 'Default Date Range',
};

export default Card;