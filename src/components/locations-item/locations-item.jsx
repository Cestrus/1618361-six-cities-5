import React from 'react';
import PropTypes from 'prop-types';

const LocationsItem = (props) => {
  const city = props.city;

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationsItem.propTypes = {
  city: PropTypes.string.isRequired,
};

export default LocationsItem;
