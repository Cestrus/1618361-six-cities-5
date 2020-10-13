import PropTypes from 'prop-types';

export const OfferPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
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
});

export const UserPropTypes = PropTypes.objectOf(PropTypes.shape({
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}));

// export const StarPropTypes = PropTypes.objectOf(PropTypes.shape({
//   value: PropTypes.number,
//   id: PropTypes.string,
//   htmlFor: PropTypes.string,
//   title: PropTypes.string,
//   onInputRatingClick: PropTypes.func,
// }));

export const ReviewPropTypes = PropTypes.PropTypes.objectOf(PropTypes.shape({
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}));
