import {
    CHANGE_SUMMONER, FETCH_SUMMONER_ERROR, FETCH_SUMMONER_PENDING, FETCH_SUMMONER_SUCCESS,
    FETCH_LOCAL_SUMMONER_ERROR, FETCH_LOCAL_SUMMONER_SUCCESS, FETCH_LOCAL_SUMMONER_PENDING
} from '../actions/summoner';

const initialState = {
    summoner: '',
    summoner_profile: {
        id: "2Do8fQPvbpg6AaXT4b_zn8CKkI_43lFrIg8WHD-3564rDqA", accountId: "NYa9ihHM6IFxtTy2JOLLmPMsu94VOKmP4UXrJZ1kZjiVAQ", puuid: "u_J4XWEXaHrYgLIvY4xSkogh0qhdqT551nBwv33xgvuc7fWE8c8jTiwEL00gV8MT5NVCemccD5wK-g", name: "Little Sheep", profileIconId: 3587,
        id: "2Do8fQPvbpg6AaXT4b_zn8CKkI_43lFrIg8WHD-3564rDqA",
        accountId: "NYa9ihHM6IFxtTy2JOLLmPMsu94VOKmP4UXrJZ1kZjiVAQ",
        puuid: "u_J4XWEXaHrYgLIvY4xSkogh0qhdqT551nBwv33xgvuc7fWE8c8jTiwEL00gV8MT5NVCemccD5wK-g",
        name: "DEFAULT",
        profileIconId: 3587,
        revisionDate: 1581220283000,
        summonerLevel: 71
    },
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
            }
        case FETCH_SUMMONER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
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