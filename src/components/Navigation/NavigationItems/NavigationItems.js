import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";

import './NavigationItems.css';

const NavigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem to="/" exact>Burger Builder</NavigationItem>
    <NavigationItem to="/orders" exact>Orders</NavigationItem>
    <NavigationItem to="/counter" exact>Counter</NavigationItem>
    <NavigationItem to="/todo" exact>To-Do</NavigationItem>
  </ul>
);

export default NavigationItems;
