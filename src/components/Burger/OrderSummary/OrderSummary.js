import React, {Fragment} from 'react';
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>
            {igKey}
          </span>: {props.ingredients[igKey]}
        </li>
      )
    });

  return (
    <Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total price: {props.price} KGS</strong></p>
      <p>Continue to checkout?</p>
      <Button
        type="Danger"
        onClick={props.purchaseCancelled}
      >
        CANCEL
      </Button>
      <Button
        type="Success"
        onClick={props.purchaseContinued}
      >
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;