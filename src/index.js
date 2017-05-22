import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory, IndexRoute, Route } from 'react-router';
import configureStore from './store/configureStore';
import AppProvider from './App.provider.js';

const store = configureStore();

render(
    <AppProvider/>,
    document.getElementById('app')
);
