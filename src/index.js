import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import statusReducer from './store/reducers/statusReducer';

import './styles/index.scss';
import './assets/global/nycity.webm';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    status: statusReducer
});

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();