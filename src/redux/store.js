import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import rootReducer from './root-reducer.js';
import {persistStore} from "redux-persist";


//set up middleware
//this configuration can be viewed on redux documentation as well
const middlewares = [logger]
const store = createStore(rootReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

export {store, persistor};

// read the fundamental tutorial
// Reading: What is a Redux selector?
// Reading: Why Not To Modify React State Directly
// Reading: Immutability in React and Redux: The Complete Guide
// Reading: Export