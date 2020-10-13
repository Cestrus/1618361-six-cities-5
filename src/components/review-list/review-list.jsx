import React from 'react';
import PropTypes from 'prop-types';
import {ReviewPropTypes} from "../../propTypes";
import ReviewItem from "../review-item/review-item";

const ReviewList = (props) => {
  const {reviewList} = props;

  return (
    <ul className="reviews__list">
      {reviewList.map((review, index) => {
        return (
          <ReviewItem
            key={index}
            review={review}
          />
        );
      })}
    </ul>
  );
};

ReviewList.propTypes = {
  reviewList: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default ReviewList;
