import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, contributors } from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    contributors
});
