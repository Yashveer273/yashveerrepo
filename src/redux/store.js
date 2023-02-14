import{createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools}from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { Reducer } from './Reducer';
const finalReducer=combineReducers({
    Reducer,
})
const initialState={
    Reducer:{
        Add_to_cart:localStorage.getItem('Add_to_cart')?JSON.parse(localStorage.getItem("Add_to_cart")):
        [],
    },
};
const middleware=[thunk];
const store=createStore(finalReducer,initialState,composeWithDevTools(applyMiddleware(
    ...middleware
)));
export default store;