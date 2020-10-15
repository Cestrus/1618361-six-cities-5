import React from 'react';
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes";
import {Link, withRouter} from 'react-router-dom';

const PlaceCard = (props) => {
  const {offer, onPlaceCardClick, onPlaceCardMouseEnter} = props;
  const {imgURL, price, description, type, isPremium, rating} = offer;

  return (
    <article
      className="cities__place-card place-card"
      onClick={onPlaceCardClick}
      onMouseEnter={() => onPlaceCardMouseEnter(offer)}
    >
      {
        (isPremium) ? <div className="place-card__mark"><span>Premium</span></div> : null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/` + offer.id}>
          <img className="place-card__image" src={imgURL} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{description}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: OfferPropTypes.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  onPlaceCardMouseEnter: PropTypes.func.isRequired,
};

export default withRouter(PlaceCard);
