import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducer from "./cartReducer";
import fetchReducer from "./fetchReducer";
//logger
import logger from "redux-logger";
//thunk
import thunk from 'redux-thunk'
import filtersReducer from "./filtersReducer";

const rootReducer = combineReducers({fetch: fetchReducer, filters: filtersReducer})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store;