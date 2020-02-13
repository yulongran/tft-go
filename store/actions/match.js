import { fetchSummonerError } from "./summoner";

export const FETCH_MATCH_PENDING = 'FETCH_MATCH_PENDING';
export const FETCH_MATCH_SUCCESS = 'FETCH_MATCH_SUCCESS';
export const FETCH_MATCH_ERROR = 'FETCH_MATCH_ERROR';
export const CLEAR_MATCH = 'CLEAN_MATCH';

export const fetchMatchPending = () => {
    return {
        type: FETCH_MATCH_PENDING
    }
}
export const fetchMatchSuccess = (matchList) => {
    return {
        type: FETCH_MATCH_SUCCESS,
        matchList: matchList
    }
}

export const fetchMatchError = (error) => {
    return {
        type: FETCH_MATCH_ERROR,
        error: error
    }
}

export const clearMatch = () => {
    return {
        type: CLEAR_MATCH,
        matchList: undefined,
    }
}

export const fetchMatch = (puuid, region) => {
    return dispatch => {
        dispatch(fetchMatchPending());
        fetch('https://tft-assistant.herokuapp.com/match/listWithDetails', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                puuid: puuid,
                region: region,
            }),
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch(fetchMatchSuccess(res));
            }).catch(error => {
                dispatch(fetchSummonerError(error));
            })
    }
}