import React from 'react';
import PropTypes from 'prop-types';
import FavoritesCard from "../favorites-card/favorites-card";

const FavoritesLocationList = (props) => {
  const {offersByCity} = props; // список по локации

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{offersByCity[0].city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offersByCity.map((offer) => {
          return (
            <FavoritesCard
              key={offer.id}
              offer={offer}/>
          );
        })}
      </div>
    </li>
  );
};

FavoritesLocationList.propTypes = {
  offersByCity: PropTypes.arrayOf(PropTypes.shape({
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
};

export default FavoritesLocationList;
