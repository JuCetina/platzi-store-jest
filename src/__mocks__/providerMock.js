import React from 'react';
import { createStore } from 'redux';
import reducer from '../reducers';
import initialState from '../initialState';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';


const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => {
    return (
        <Provider store={store}>
            <Router history={history}>
                {props.children}
            </Router>    
        </Provider>
    );
}

export default ProviderMock;