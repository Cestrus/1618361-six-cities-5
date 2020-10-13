import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {OfferPropTypes, ReviewPropTypes} from '../../propTypes';

import Main from '../main/main';
import Login from '../login/login';
import Room from '../room/room';
import Favorites from '../favorites/favorites';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      user: {
        email: null,
        password: null,
      },
    };
  }

  render() {
    const {user} = this.state;
    const {cities, offers, reviews} = this.props;

    return (
      <Switch>
        <Route path='/' exact render={() => (
          <Main
            cities={cities}
            offers={offers}
          />
        )}/>
        <Route path='/login' exact render={() => (
          <Login
            user={user}
          />
        )}/>
        <Route path='/favorites' exact render={() => (
          <Favorites
            cities={cities}
            offers={offers}
          />
        )}/>
        <Route path='/offer/:id' exact render={() => (
          <Room
            offers={offers}
            reviews={reviews}
          />
        )}/>
        <Redirect to='/'/>
      </Switch>
    );
  }
}

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default App;
