export const FETCH_LEAGUE_SUCCESS = 'FETCH_LEAGUE_SUCCESS';
export const FETCH_LEAGUE_ERROR = "FETCH_LEAGUE_ERROR";
export const FETCH_LEAGUE_PENDING = 'FETCH_LEAGUE_PENDING';
export const RESET_LEAGUE = "RESET_LEAGUE";
export const FETCH_LOCAL_LEAGUE_SUCCESS = "FETCH_LOCAL_LEAGUE_SUCCESS";
export const FETCH_LOCAL_LEAGUE_PENDING= "FETCH_LOCAL_LEAGUE_PENDING";
export const FETCH_LOCAL_LEAGUE_ERROR = "FETCH_LOCAL_LEAGUE_ERROR";



export const fetchLeagueSuccess = (league) => {
    return {
        type: FETCH_LEAGUE_SUCCESS,
        league: league,
    }
}

export const fetchLeagueError = (error) => {
    return {
        type: FETCH_LEAGUE_ERROR,
        error: error
    }
}
export const fetchLeaguePending = () => {
    return {
        type: FETCH_LEAGUE_PENDING,
    }
}


export const fetchLocalLeagueSuccess = (league) =>{
    return{
        type: FETCH_LOCAL_LEAGUE_SUCCESS,
        league: league,
    }
}

export const fetchLocalLeaguePending = ()=>{
    return{
        type: FETCH_LOCAL_LEAGUE_PENDING,
    }
}

export const fetchLocalLeagueError = (error) =>{
    return{
        type: FETCH_LOCAL_LEAGUE_ERROR,
        error: error,
    }
}

export const resetLeague = () => {
    return {
        type: RESET_LEAGUE,
    }
}


export const fetchLeague = (encryptedSummonerId, region) => {
    return dispatch => {
        dispatch(fetchLeaguePending());
        fetch('https://tft-assistant.herokuapp.com/league/by-summoner', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                encryptedSummonerId: encryptedSummonerId,
                region: region,
            }),
        }).then(res => res.json())
            .then(res => {
                dispatch(fetchLeagueSuccess(res.response));
                return res.response;
            }).catch(error => {
                dispatch(fetchLeagueError(error));
            })
    }
}

export const fetchLocalLeague = (encryptedSummonerId, region) => {
    return dispatch => {
        dispatch(fetchLocalLeaguePending());
        fetch('https://tft-assistant.herokuapp.com/league/by-summoner', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                encryptedSummonerId: encryptedSummonerId,
                region: region,
            }),
        }).then(res => res.json())
            .then(res => {
                dispatch(fetchLocalLeagueSuccess(res.response));
                return res.response;
            }).catch(error => {
                dispatch(fetchLocalLeagueError(error));
            })
    }
}