import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { initialPathName, onNavigate, defaultHistory }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPathName],
    });
  onNavigate && history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, el);
  return {
    onParentNavigate: (location) => {
      const { pathname: nextPathname } = location;
      const { pathname: currentPathname } = history.location;
      nextPathname !== currentPathname && history.push(nextPathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#__marketing-dev-root");
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
