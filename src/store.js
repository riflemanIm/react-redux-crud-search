import { applyMiddleware, createStore } from "redux";

import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const middleware = composeWithDevTools(applyMiddleware(promise()));

export default createStore(rootReducer, middleware);
