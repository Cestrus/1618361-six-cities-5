import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';

import {CITIES} from './const';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <App
        cities={CITIES}
        offers={offers}
        reviews={reviews}
      />
    </BrowserRouter>, document.querySelector(`#root`));
