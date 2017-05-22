export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    var retArr = [];
    var items = action.items;
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        case 'SORT_DATA_BY_WATCH':
            // for (var i = 0; i < items.length-1; i++) {
            //     var first = (items[i].watchers_count) % (10 * (i + 1));
            //     var second = (items[i + 1].watchers_count) % (10 * (i + 1));
            //     if (first > second) {
            //         var temp = items[i];
            //         items[i] = items[i + 1];
            //         items[i + 1] = temp;
            //     }
            // }
            for (var i = 0; i < items.length - 1; i++) {
                var min = items[i];
                for (var j = i + 1; j < items.length; j++) {
                    if (min.watchers_count > items[j].watchers_count) {
                        min = items[j];
                        var temp = items[j];
                        items[j] = items[i];
                        items[i] = temp;
                    }
                }
            }
            items.map(function (item) {
                retArr.push(item);
            });
            return retArr;
        case 'SORT_DATA_BY_FORKS':
            for (var i = 0; i < items.length - 1; i++) {
                var min = items[i];
                for (var j = i + 1; j < items.length; j++) {
                    if (min.forks_count > items[j].forks_count) {
                        min = items[j];
                        var temp = items[j];
                        items[j] = items[i];
                        items[i] = temp;
                    }
                }
            }
            items.map(function (item) {
                retArr.push(item);
            });
            return retArr;
        case 'SORT_DATA_BY_NAME':
            for (var i = 0; i < items.length - 1; i++) {
                var min = items[i];
                for (var j = i + 1; j < items.length; j++) {
                    if (min.full_name.localeCompare(items[j].full_name) == 1) {
                        min = items[j];
                        var temp = items[j];
                        items[j] = items[i];
                        items[i] = temp;
                    }
                }
            }
            items.map(function (item) {
                retArr.push(item);
            });
            return retArr;
        case 'SORT_DATA_BY_LANG':
            for (var i = 0; i < items.length - 1; i++) {
                var min = items[i];
                for (var j = i + 1; j < items.length; j++) {
                    if (min.language > items[j].language) {
                        min = items[j];
                        var temp = items[j];
                        items[j] = items[i];
                        items[i] = temp;
                    }
                }
            }
            items.map(function (item) {
                retArr.push(item);
            });
            return retArr;
        case 'SORT_DATA_BY_OI':
            for (var i = 0; i < items.length - 1; i++) {
                var min = items[i];
                for (var j = i + 1; j < items.length; j++) {
                    if (min.open_issues_count > items[j].open_issues_count) {
                        min = items[j];
                        var temp = items[j];
                        items[j] = items[i];
                        items[i] = temp;
                    }
                }
            }
            items.map(function (item) {
                retArr.push(item);
            });
            return retArr;
        default:
            return state;
    }
}

export function contributors(state = [], action) {
    switch (action.type) {
        case 'CONTRIBUTORS_FETCH_DATA_SUCCESS':
            return action.contributors;

        default:
            return state;
    }
}


