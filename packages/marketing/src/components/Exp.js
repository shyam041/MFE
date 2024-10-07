import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1>Experiment</h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#__marketing-dev-root");
  if (el) {
    mount(el);
  }
}
export default mount;
