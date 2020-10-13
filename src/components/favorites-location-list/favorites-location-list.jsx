import React from 'react';
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes";
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
  offersByCity: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export default FavoritesLocationList;
