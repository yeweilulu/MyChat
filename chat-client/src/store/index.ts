import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";


import thunk from "redux-thunk";
import logger from "redux-logger";


import login from "./reducer/login";

let reducer = combineReducers({
    login
});

export default createStore(reducer, applyMiddleware(thunk, logger));