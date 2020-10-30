import {
  CHANGE_CITY,
  GET_OFFERS,

} from '../action-types';

export const ActionCreator = {
  changeCityAction: () => ({
    type: CHANGE_CITY,
  }),

  getOffersAction: () => ({
    type: GET_OFFERS,
  }),


}; 

