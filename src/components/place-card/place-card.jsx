import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const offer = props.offer;
  const {imgURL, price, description, type, isPremium, rating} = offer;

  const onPlaceCardClick = props.onPlaceCardClick;
  const onPlaceCardMouseEnter = props.onPlaceCardMouseEnter;

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
        <a href="#">
          <img className="place-card__image" src={imgURL} width="260" height="200" alt="Place image" />
        </a>
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
  offer: PropTypes.shape({
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
  }),
  onPlaceCardClick: PropTypes.func,
  onPlaceCardMouseEnter: PropTypes.func,
};

export default PlaceCard;
