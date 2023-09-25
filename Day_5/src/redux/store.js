import handleCart from './handleCart'
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,
})
export default rootReducers


----
import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';
const store = configureStore({
    reducer: rootReducers,

})

export default store;