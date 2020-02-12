export const CHANGE_SUMMONER = 'CHANGE_SUMMONER';
export const FETCH_SUMMONER_PENDING = 'FETCH_SUMMONER_PENDING';
export const FETCH_SUMMONER_SUCCESS = 'FETCH_SUMMONER_SUCCESS';
export const FETCH_SUMMONER_ERROR = 'FETCH_SUMMONER_ERROR';
export const FETCH_LOCAL_SUMMONER_PENDING = 'FETCH_LOCAL_SUMMONER_PENDING';
export const FETCH_LOCAL_SUMMONER_SUCCESS = 'FETCH_LOCAL_SUMMONER_SUCCESS';
export const FETCH_LOCAL_SUMMONER_ERROR = 'FETCH_LOCAL_SUMMONER_ERROR';


export const changeSummoner = (summoner) => {
    return {
        type: CHANGE_SUMMONER,
        summoner: summoner,
    }
}

export const fetchSummonerPending = () => {
    return {
        type: FETCH_SUMMONER_PENDING
    }
}
export const fetchSummonerSuccess = (summoner_profile) => {
    return {
        type: FETCH_SUMMONER_SUCCESS,
        summoner_profile: summoner_profile
    }
}

export const fetchSummonerError = (error) => {
    return {
        type: FETCH_SUMMONER_ERROR,
        error: error
    }
}

export const fetchLocalSummonerPending = ()=>{
    return{
        type:FETCH_LOCAL_SUMMONER_PENDING
    }
}

export const fetchLocalSummonerSuccess = (local_summoner_profile) =>{
    return{
        type: FETCH_LOCAL_SUMMONER_SUCCESS,
        local_summoner_profile: local_summoner_profile
    }
}

export const fetchLocalSummonerError = (error)=>{
    return {
        type: FETCH_LOCAL_SUMMONER_ERROR,
        local_error: error
    }
}

export const fetchSummoner = (name, region) => {
    return dispatch => {
        dispatch(fetchSummonerPending());
        fetch('https://tft-assistant.herokuapp.com/summoner/name', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                region: region,
            }),
        }).then(res => res.json())
            .then(res => {
                console.log(res.response)
                dispatch(fetchSummonerSuccess(res.response));
                return res.response;
            }).catch(error => {
                dispatch(fetchSummonerError(error));
            })
    }
}


export const fetchLocalSummoner = (name, region) => {
    return dispatch => {
        dispatch(fetchLocalSummonerPending());
        fetch('https://tft-assistant.herokuapp.com/summoner/name', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                region: region,
            }),
        }).then(res => res.json())
            .then(res => {
                dispatch(fetchLocalSummonerSuccess(res.response));
                return res.response;
            }).catch(error => {
                dispatch(fetchLocalSummonerError(error));
            })
    }
}