// npm install redux
// npm install react-redux
//1. store (state,dispatch)
//2. actions
//3. reducers
//4. connect
import { createStore, applyMiddleware, compose } from "redux";
import root from "./reducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(root, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(root, applyMiddleware(thunk));
// const store = createStore(root);

export default store;
