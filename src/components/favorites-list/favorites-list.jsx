import React from 'react';
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes";
import FavoritesLocationList from "../favorites-location-list/favorites-location-list";

const FavoritesList = (props) => {
  const {offers} = props;
  const offersByCities = offers.reduce((result, offer) => {
    result[offer.city] = result[offer.city] || [];
    if (offer.isFavorites) {
      result[offer.city].push(offer);
    }
    return result;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.entries(offersByCities).map((offersByCity) => {
        return (
          (offersByCity[1].length)
            ? <FavoritesLocationList
              key={offersByCity[0]}
              offersByCity={offersByCity}
            />
            : null
        );
      })}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export default FavoritesList;

