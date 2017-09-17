import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// registerServiceWorker();

// function playList(state = [], action) {
//   console.log(action);
//   if (action.type === "ADD_TRACK") return [...state, action.payload];
//   return state;
// }
// const store = createStore(playList);
// const addTrackBtn = document.querySelectorAll(".addTrack")[0];
// const trackName = document.querySelectorAll(".trackInput")[0];
// const list = document.querySelectorAll(".list")[0];

// store.subscribe(() => {
//   console.log(store.getState());

//   list.innerHTML = "";
//   trackName.value = "";
//   store.getState().forEach(track => {
//     const li = document.createElement("li");
//     li.textContent = track;
//     list.appendChild(li);
//   });
// });

// store.dispatch({
//   type: "ADD_TRACK",
//   payload: "Don't cry to night"
// });

// store.dispatch({
//   type: "ADD_TRACK",
//   payload: "Pure morning"
// });

// store.dispatch({
//   type: "ADD_TRACK",
//   payload: "new 3"
// });

// addTrackBtn.addEventListener("click", () => {
//   store.dispatch({
//     type: "ADD_TRACK",
//     payload: trackName.value
//   });
// });
