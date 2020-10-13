import React from 'react';
import PropTypes from 'prop-types';
import {ReviewPropTypes} from "../../propTypes";

import ReviewList from "../review-list/review-list";
import FormSendComment from "../form-send-comment/form-send-comment";

const ReviewSection = (props) => {
  const reviewList = props.reviews[0].reviewList;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>
      <ReviewList
        reviewList={reviewList}
      />
      <FormSendComment/>
    </section>
  );
};

ReviewSection.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    reviewList: PropTypes.arrayOf(ReviewPropTypes).isRequired,
  })),
};

export default ReviewSection;

