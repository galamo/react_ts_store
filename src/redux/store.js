// npm install redux
// npm install react-redux
//1. store (state,dispatch)
//2. actions
//3. reducers
//4. connect
import { createStore, applyMiddleware } from "redux"
import root from "./reducers"
import thunk from "redux-thunk"
// import saga from "redux-saga"
const store = createStore(root, applyMiddleware(thunk))
export default store;




