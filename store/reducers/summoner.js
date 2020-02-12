import {
    CHANGE_SUMMONER, FETCH_SUMMONER_ERROR, FETCH_SUMMONER_PENDING, FETCH_SUMMONER_SUCCESS,
    FETCH_LOCAL_SUMMONER_ERROR, FETCH_LOCAL_SUMMONER_SUCCESS, FETCH_LOCAL_SUMMONER_PENDING
} from '../actions/summoner';

const initialState = {
    summoner: '',
    summoner_profile: undefined,
    pending: false,
    error: undefined,
    local_summoner_profile: undefined,
    local_error: undefined,
    local_pending: false,
};

const summonerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SUMMONER:
            return {
                ...state,
                pending: false,
                error: undefined,
                summoner: action.summoner,
                summoner_profile: undefined,
            };
        case FETCH_SUMMONER_SUCCESS:
            return {
                ...state,
                pending: false,
                error: undefined,
                summoner_profile: action.summoner_profile,
            };
        case FETCH_SUMMONER_PENDING:
            return {
                ...state,
                pending: true,
                error: undefined,
                summoner_profile: undefined,
            }
        case FETCH_SUMMONER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
                summoner_prfile: undefined,
            }
        case FETCH_LOCAL_SUMMONER_SUCCESS:
            return {
                ...state,
                local_pending: false,
                local_error: undefined,
                local_summoner_profile: action.local_summoner_profile,
            }
        case FETCH_LOCAL_SUMMONER_PENDING:
            return {
                ...state,
                local_pending: true,
                local_error: undefined,
                local_summoner_profile: undefined,
            }
        case FETCH_LOCAL_SUMMONER_ERROR:
            return {
                ...state,
                local_pending: false,
                local_error: action.error,
                local_summoner_profile: undefined,

            }
        default:
            return state;
    }
};


export default summonerReducer;