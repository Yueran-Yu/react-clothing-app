import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store.js'

ReactDOM.render(
    /*
    * The provider is a component that is a parent of everything inside of our application.
    * As the parent it allows us to get access to all of the things related to the store
    * that we go to put all of the actual code we want to store on our redux state.
    * It's got be the parent of everything
    * */
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App/>
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
