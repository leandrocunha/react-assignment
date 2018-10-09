import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import area from './reducers/area';
import competition from './reducers/competition';
import modal from './reducers/modal';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './sass/main.css';

const store = createStore(
    combineReducers({ area, competition, modal }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
