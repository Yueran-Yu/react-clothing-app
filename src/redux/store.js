import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//set up middleware
//this configuration can be viewed on redux documentation as well

const middleware = [logger]
const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;