import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import { Provider } from 'react-redux';
import { MainApp } from './store/configureStore';
import SearchComponent from './components/SearchComponent.js';
import DetailsComponent from './components/DetailsComponent.js';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from './reducers/index';
import { Router, hashHistory, IndexRoute, Route } from 'react-router';

const store = compose(applyMiddleware(thunk), autoRehydrate())(createStore)(reducer)

export default class AppProvider extends React.Component {

    constructor() {
        super()
        this.state = { rehydrated: false }
    }

    componentWillMount() {
        persistStore(store, {}, () => {
            this.setState({ rehydrated: true })
        })
    }

    render() {
        if (!this.state.rehydrated) {
            return <div>Loading...</div>
        }
        return (
                <Provider store={store}>
                    <Router history={hashHistory}>
                        <Router path="/" component={MainApp}>
                            <IndexRoute component={SearchComponent} />
                            <Route path="/details/:item" component={DetailsComponent} />
                        </Router>
                    </Router>
                </Provider>
        )
    }
}