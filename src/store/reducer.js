import offers from '../mocks/offers';
import {
  CHANGE_CITY,
  GET_OFFERS,
} from './actions/action-types';

const initialState = {
  city: `Amsterdam`,
  offers
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,

      };
    case GET_OFFERS:
      return {
        ...state,
      };
    default: return state;
  }
};


