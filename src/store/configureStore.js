import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import App from '../components/ContainerApp.js';
import { connect } from 'react-redux';
import { itemsFetchData, sortItems, contributorFetchData } from '../actions/items';
import {persistStore, autoRehydrate} from 'redux-persist';

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        contributors : state.contributors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        sortData: (sortQuery, items) => dispatch(sortItems(sortQuery, items)),
        fetchContributors: (sortQuery, items) => dispatch(contributorFetchData(sortQuery, items))        
    };
};


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}


export var MainApp = connect(mapStateToProps, mapDispatchToProps)(App);
