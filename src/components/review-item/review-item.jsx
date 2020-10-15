import React from 'react';
import {ReviewPropTypes} from "../../propTypes";

const ReviewItem = (props) => {
  const {img, author, comment, date} = props.review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={img} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{author}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `80%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${date}`}>{`${date.split(` `)[1]} ${date.split(` `)[2]}`}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: ReviewPropTypes.isRequired,
};

export default ReviewItem;
