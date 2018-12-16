import * as actionTypes from '../actionTypes';

const initialState = {
    loadComplete: false,
    error: null,
    pageSections: []
};

const updatePageStatus = (state, pageSections) => {
    return {
        ...state,
        loadComplete: true,
        pageSections: pageSections,
    };
};

const failedPageStatus = (state, error) => {
    return {
        ...state,
        loadComplete: true,
        error: error,
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PAGELOAD_COMPLETE:
            return updatePageStatus(state, action.pageSections);
        case actionTypes.PAGELOAD_FAILED:
            return failedPageStatus(state, action.error);
        default:
        return state;
    }
};

export default reducer;