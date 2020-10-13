import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {UserPropTypes} from '../../propTypes';

class FormLogin extends PureComponent {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // some logic
  }

  render() {
    return (
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={this.handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input" type="email" name="email" placeholder="Email" required=""/>
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input className="login__input form__input" type="password" name="password" placeholder="Password" required=""/>
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    );
  }
}

FormLogin.propTypes = {
  user: PropTypes.shape(UserPropTypes).isRequired,
};

export default FormLogin;

