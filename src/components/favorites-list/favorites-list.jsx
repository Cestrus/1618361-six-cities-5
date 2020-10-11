import React from 'react';
import PropTypes from 'prop-types';
import FavoritesLocationList from "../favorites-location-list/favorites-location-list";

const FavoritesList = (props) => {
  const {offers, cities} = props;
  const offersByCities = []; // массив, содержащий массивы квартир, сортированных по городам

  (function () {
    for (let i = 0; i < cities.length; i++) {
      let offersByCity = [];
      for (let j = 0; j < offers.length; j++) {
        if (cities[i] === offers[j].city && offers[j].isFavorites) {
          offersByCity.push(offers[j]);
        }
      }
      if (offersByCity.length) {
        offersByCities.push(offersByCity);
      }
    }
  })();


  return (
    <ul className="favorites__list">
      {offersByCities.map((offersByCity, index) => {
        return (
          <FavoritesLocationList
            key={index}
            offersByCity={offersByCity}
          />
        );
      })}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    imgURL: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
    isFavorites: PropTypes.bool,
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    whatsInside: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
  })),
  cities: PropTypes.arrayOf(PropTypes.string),
};

export default FavoritesList;

