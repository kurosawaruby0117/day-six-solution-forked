import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";


import Price from "../Screens/Prices/Prices";
import Exchanges from "../Screens/Exchanges/Exchanges";
import Coins from "../Screens/Coins/Coins";
import Coin from "../Screens/Coin/CoinContainer";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Price} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins" exact component={Coins} />
      <Route path="/coins/:id" component={Coin} />
    </Router>
  );
};
