export const FETCH_LEADERBOARD_SUCCESS = 'FETCH_LEADERBOARD_SUCCESS';
export const FETCH_LEADERBOARD_PENDING = 'FETCH_LEADERBOARD_PENDING';
export const FETCH_LEADERBOARD_ERROR = 'FETCH_LEADERBOARD_ERROR';


export const fetchLeaderBoardPending = () => {
    return {
        type: FETCH_LEADERBOARD_PENDING,
    }
}

export const fetchLeaderBoardSuccess = (leaderboard) => {
    return {
        type: FETCH_LEADERBOARD_SUCCESS,
        leaderboard: leaderboard,
    }
}

export const fetchLeaderBoardError = (error) => {
    return {
        type: FETCH_LEADERBOARD_ERROR,
        error: error,
    }
}


export const fetchLeaderBoard = (region) => {
    return dispatch => {
        dispatch(fetchLeaderBoardPending());
        fetch('https://tft-assistant.herokuapp.com/league/leaderboard', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                region: region,
            }),
        }).then(res => res.json())
            .then(res => {
                dispatch(fetchLeaderBoardSuccess(res));
                return res.response;
            }).catch(error => {
                dispatch(fetchLeaderBoardError(error));
            })
    }
}