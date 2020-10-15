import React from 'react';
import {UserPropTypes} from "../../propTypes";

import Header from '../header/header';
import FormLogin from "../form-login/form-login";

const Login = (props) => {
  const {user} = props;

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <FormLogin
              user={user}
            />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Login.propTypes = {
  user: UserPropTypes.isRequired
};

export default Login;
