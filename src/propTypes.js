import PropTypes from 'prop-types';

export const OfferPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  cityCoord: PropTypes.arrayOf(PropTypes.number).isRequired,
  imgURL: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorites: PropTypes.bool.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  whatsInside: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  offerCoord: PropTypes.arrayOf(PropTypes.number).isRequired,
});

export const UserPropTypes = PropTypes.objectOf(PropTypes.shape({
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}));

export const ReviewPropTypes = PropTypes.shape({
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

export const ReviewsPropTypes = PropTypes.shape({
  offerID: PropTypes.number.isRequired,
  reviewList: PropTypes.arrayOf(ReviewPropTypes).isRequired,
});

