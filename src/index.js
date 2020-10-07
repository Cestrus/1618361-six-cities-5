import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';


const placeCardsData = [
  {
    imgURL: `img/apartment-01.jpg`,
    price: 120,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  },
  {
    imgURL: `img/room.jpg`,
    price: 80,
    name: `Wood and stone place`,
    type: `Private room`,
  },
  {
    imgURL: `img/apartment-02.jpg`,
    price: 132,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
  },
  {
    imgURL: `img/apartment-03.jpg`,
    price: 180,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
  },
  {
    imgURL: `img/room.jpg`,
    price: 80,
    name: `Wood and stone place`,
    type: `Private room`,
  }
];

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

ReactDOM.render(
    <App
      placeCardsData = {placeCardsData}
      cities = {cities}
    />, document.querySelector(`#root`));
