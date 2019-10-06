// npm install redux
// npm install react-redux
//1. store (state,dispatch)
//2. actions
//3. reducers
//4. connect
import { createStore, applyMiddleware } from "redux"
import root from "./reducers"
const store = createStore(root)
export default store;


