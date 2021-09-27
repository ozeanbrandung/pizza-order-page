import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import cartReducer from "./cartReducer";
import fetchReducer from "./fetchReducer";
//logger
import logger from "redux-logger";
//thunk
import thunk from 'redux-thunk'
import filtersReducer from "./filtersReducer";

const rootReducer = combineReducers({fetch: fetchReducer, filters: filtersReducer})

//для расширения chrome конфигурация
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

export default store;