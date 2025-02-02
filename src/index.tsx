import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from "./components/App";
import store from "../src/redux/store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
