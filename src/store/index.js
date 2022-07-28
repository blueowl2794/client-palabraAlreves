// import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// import {composeWithDevTools} from 'redux';
import text from './reducer';
// import thunk from 'redux-thunk';

const store = configureStore({
    reducer:{
        text
    }
});

export default store;