import osquery  from 'osquery';
export const  GET_RESPONSE = 'GET_RESPONSE';
export const CHANGE_QUERY  = 'CHANGE_QUERY';
export const SET_ERROR  = 'SET_ERROR';
export const SET_RES  = 'SET_RES';
export const SET_EMPTY_RES  = 'SET_EMPTY_RES';

export function getResponse() {
    return (dispatch, getState) => {
        const { query } = getState();

        var os  = osquery.createClient({ path: "/var/osquery/osquery.em" });
        var res = os.query(query.query, (err, res) => {
            if (res.status.code === 1) {
                dispatch(setError(res.status.message));
                return;
            }
            else if (res.response.length === 0) {
                dispatch(emptyResp());
                return;
            }
            else if (res.response.length > 0) {
                dispatch(setResponse(res.response));
                return;
            }
         });
    };
}

export function setResponse (res) {
    return {
        type: SET_RES,
        response: res
    }
}

export function setError (err) {
    return {
        type: SET_ERROR,
        error: err
    }
}

export function changeQuery (e) {
    return {
        type: CHANGE_QUERY,
        query: e.target.value
    }
}

export function emptyResp () {
    return {
        type: SET_EMPTY_RES,
        response: {},
        error: ''
    }
}
