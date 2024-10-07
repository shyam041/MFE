import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "../components/Header";
import MarketingApp from "../components/MarketingApp";
import Exp from "../components/Exp";
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Exp />
        <Header />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};
