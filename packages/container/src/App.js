import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
// import Exp from "../components/Exp";
import Header from "../components/Header";
import AuthApp from "../components/AuthApp";
import MarketingApp from "../components/MarketingApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route exact path="/" component={MarketingApp} />
        </Switch>
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};
