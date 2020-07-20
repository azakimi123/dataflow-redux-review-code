import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import carReducer from './carReducer';

const rootReducer = combineReducers({
    userReducer,
    carReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));