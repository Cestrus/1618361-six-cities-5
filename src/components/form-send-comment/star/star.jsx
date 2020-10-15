import React from 'react';
import PropTypes from 'prop-types';

const Star = (props) => {
  const {value, id, htmlFor, title, onInputRatingClick} = props;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={id}
        type="radio"
        onClick={onInputRatingClick}
      />
      <label htmlFor={htmlFor} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use href="#icon-star"/>
        </svg>
      </label>
    </>
  );
};

Star.propTypes = {
  value: PropTypes.number,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  title: PropTypes.string,
  onInputRatingClick: PropTypes.func,
};

export default Star;
