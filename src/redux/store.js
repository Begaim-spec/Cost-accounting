import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./reducers/userReducer";
import {moneyReducer} from "./reducers/moneyReducer";
import thunk from "redux-thunk";



export const store = createStore(combineReducers({
    money: moneyReducer,
    user: userReducer
}), composeWithDevTools(applyMiddleware(thunk)))