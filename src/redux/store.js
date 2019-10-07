// npm install redux
// npm install react-redux
//1. store (state,dispatch)
//2. actions
//3. reducers
//4. connect
import { createStore, applyMiddleware } from "redux"
import root from "./reducers"
import thunk from "redux-thunk";
const store = createStore(root, applyMiddleware(thunk))
export default store;


