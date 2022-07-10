import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import reposReducer from "./reposReducer";
import cashReducer from "./cashReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: reposReducer,
    cash: cashReducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))