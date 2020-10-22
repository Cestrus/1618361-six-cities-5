import React, {PureComponent} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {OfferPropTypes, ReviewsPropTypes} from '../../propTypes';

import Main from '../main/main';
import Login from '../login/login';
import Room from '../room/room';
import Favorites from '../favorites/favorites';


class App extends PureComponent {
  constructor(props) {
    super(props);

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
        <Route path='/' exact>
          <Main
            cities={cities}
            offers={offers}
          />
        </Route>
        <Route path='/login' exact>
          <Login
            user={user}
          />
        </Route>
        <Route path='/favorites' exact>
          <Favorites
            cities={cities}
            offers={offers}
          />
        </Route>
        <Route path='/offer/:id' exact>
          <Room
            offers={offers}
            reviews={reviews}
          />
        </Route>
        <Redirect to='/'/>
      </Switch>
    );
  }
}

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewsPropTypes).isRequired,
};

export default App;
