import * as actionTypes from '../actionTypes';
import server from '../../axios-server';

import paths from '../../shared/paths';
import utils from '../../shared/utils';

export const loadDataStart = token => {
    return {
        type: actionTypes.PAGELOAD_START,
        token: token
    };
};

export const loadDataSuccess = (token, sections) => {
    return {
        type: actionTypes.PAGELOAD_COMPLETE,
        token: token,
        pageSections: sections
    }
};

export const loadDataFailed = (token, error) => {
    return {
        type: actionTypes.PAGELOAD_FAILED,
        token: token,
        error: error
    }
}

const loadAssets = () => {
    // For now, let's preload only the background video
    return utils.preloadVideo(paths.mainBackgroundVideo);
}

const loadData = token => {
    return server.get('/data.json?t=' + token);
}

export const init = token => {
    return (dispatch, getState) => {
        dispatch(loadDataStart());
        Promise.all([loadAssets(), loadData(token)])
            .then(values => {
                console.log(getState());
                dispatch(loadDataSuccess(values[1].data.token, values[1].data.sections));
            })
            .catch(error => {
                dispatch(loadDataFailed(token, error));
            });
    };
};