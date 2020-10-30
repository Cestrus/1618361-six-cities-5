import React from 'react';
import PropTypes from 'prop-types';
import LocationsItem from '../locations-item/locations-item';

const CitiesList = (props) => {
  const {cities, onCityClick} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            return (
              <LocationsItem
                key={city}
                city={city}
                onCityClick={onCityClick}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;