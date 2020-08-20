import {applyMiddleware, combineReducers, createStore, compose} from "redux";

import terminalsReducer from './terminals-reducer.js'
import buyersReducer from './buyers-reducer.js'
import authReducer from './auth-reducer.js'

import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
	terminals: terminalsReducer,
	buyers: buyersReducer,
	auth: authReducer,
	form: formReducer,
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;