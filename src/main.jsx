/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store.js";
import { BrowserRouter } from "react-router-dom";
import {LikeContextProvider} from "./context/likeContext.jsx";
import { SearchContextProvider} from "./context/searchContext.jsx";

const reduceProvider = (providers) =>
  providers.reduce((Prev, Curr) => (props) => (
    <Prev>
      <Curr>{props.children}</Curr>
    </Prev>
  ))

// eslint-disable-next-line react-refresh/only-export-components
const ContextProvider = reduceProvider([
  LikeContextProvider,
  SearchContextProvider
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
