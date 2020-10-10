import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Main from '../main/main';
import Login from '../login/login';
import Room from '../room/room';
import Favorites from '../favorites/favorites';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      login: null,
      password: null,
    };
  }


  render() {
    const {login, password} = this.state;
    const {cities, offers, reviews} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={() => (
            <Main
              cities={cities}
              offers={offers}
            />
          )}/>
          <Route path='/login' exact render={() => (
            <Login
              login={login}
              password={password}
            />
          )}/>
          <Route path='/favorites' exact component={Favorites}/>
          <Route path='/offer/:id' exact render={() => (
            <Room
              reviews={reviews}
            />
          )}/>
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    imgURL: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    whatsInside: PropTypes.arrayOf(PropTypes.string),
  })),
  reviews: PropTypes.arrayOf(PropTypes.shape({
    offerID: PropTypes.number,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string,
      img: PropTypes.string,
      review: PropTypes.string,
      date: PropTypes.shape({
        day: PropTypes.number,
        month: PropTypes.string,
        year: PropTypes.number
      })
    }))
  }))
};

export default App;
