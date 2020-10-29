import React from 'react';
import PropTypes from 'prop-types';

const LocationsItem = (props) => {
  const {city, onCityClick} = props;

  return (
    <li className="locations__item"
      onClick={(event)=>onCityClick(event)}
    >
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationsItem.propTypes = {
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default LocationsItem;
