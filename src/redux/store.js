import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import fetchReducer from "./fetchReducer";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import filtersReducer from "./filtersReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({fetch: fetchReducer, filters: filtersReducer, cart: cartReducer})

//для расширения chrome конфигурация
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

export default store;