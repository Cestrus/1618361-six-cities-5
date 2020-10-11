import React, {PureComponent} from 'react';
import StarLine from "./star-line/star-line";

class FormSendComment extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleInputRatingClick = this.handleInputRatingClick.bind(this);

    this.state = {
      value: 0,
      comment: ``,
    };
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }

  handleTextareaChange(ev) {
    const {value} = ev.target;
    this.setState({comment: value});
  }

  handleInputRatingClick(ev) {
    const {value} = ev.target;
    this.setState({value});
  }

  render() {

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this.handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <StarLine onInputRatingClick={this.handleInputRatingClick}/>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this.handleTextareaChange}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}


export default FormSendComment;


