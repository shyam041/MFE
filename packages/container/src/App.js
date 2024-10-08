import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
// import Exp from "../components/Exp";
import Header from "../components/Header";
import Progress from "../components/Progress";
const AuthLazy = lazy(() => import("../components/AuthApp"));
const MarketingLazy = lazy(() => import("../components/MarketingApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    console.log("is signed in ", isSignedIn);
  }, [isSignedIn]);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};
