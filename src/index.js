import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from '../src/components/app/app';

import {CITIES} from './const';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import {BrowserRouter} from "react-router-dom";
import {store} from './store/configure-store';


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App
          cities={CITIES}
          offers={offers}
          reviews={reviews}
        />
      </BrowserRouter>
    </Provider>, document.querySelector(`#root`));
