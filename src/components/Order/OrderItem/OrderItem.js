import React from 'react';
import './OrderItem.css';

const OrderItem = props => {
  const ingredients = props.ingredients && Object.keys(props.ingredients).map(igName => (
    <span key={igName}>{igName} ({props.ingredients[igName]})</span>
  ));

  return (
    <div className="OrderItem">
      <p>Ingredients: {ingredients}</p>
      <p>Price: <strong>{props.price} KGS</strong></p>
    </div>
  );
};

export default OrderItem;