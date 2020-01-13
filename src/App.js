import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from "./components/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Orders from "./containers/Orders/Orders";
import Counter from "./containers/Counter/Counter";
import ToDo from "./containers/ToDo/ToDo";

const App = () => (

    <Layout>
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/counter" exact component={Counter} />
        <Route path="/todo" exact component={ToDo} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </Layout>

);

export default App;
