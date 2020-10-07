import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Main from '../main/main';
import Login from '../login/login';
import Room from '../room/room';
import Favorites from '../favorites/favorites';

import placeCardsData from '../../mocks/placeCardsDataMock';
import cities from '../../mocks/citiesMock';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={() => (
          <Main
            cities = {cities}
            placeCardsData = {placeCardsData}
          />
        )}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/favorites' exact component={Favorites}/>
        <Route path='/offer' exact component={Room}/>
        <Redirect to='/'/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  placeCardsData: PropTypes.arrayOf(PropTypes.shape({
    imgURL: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
  })),
};

export default App;
