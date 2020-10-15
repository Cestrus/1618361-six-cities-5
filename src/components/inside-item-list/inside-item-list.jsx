import React from 'react';
// import PropTypes from 'prop-types';

const InsideItemList = () => {
  const items = [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`];

  return (
    <ul className="property__inside-list">
      {items.map((item) => {
        return (
          <li
            key={item}
            className="property__inside-item"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default InsideItemList;
