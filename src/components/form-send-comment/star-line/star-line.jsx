import React from 'react';
import PropTypes from 'prop-types';
import Star from "../star/star";


const StarLine = (props) => {
  const rating = [{title: `perfect`, value: 5}, {title: `good`, value: 4}, {title: `not bad`, value: 3}, {title: `badly`, value: 2}, {title: `terribly`, value: 1}];
  const {onInputRatingClick} = props;

  return (
    <div className="reviews__rating-form form__rating">
      {rating.map((el, index) => {
        return (
          <Star
            key={index}
            value={el.value}
            id={`${el.value}-stars`}
            htmlFor={`${el.value}-stars`}
            title={el.title}
            onInputRatingClick={onInputRatingClick}
          />
        );
      })}
    </div>
  );
};

StarLine.propTypes = {
  onInputRatingClick: PropTypes.func,
};

export default StarLine;

