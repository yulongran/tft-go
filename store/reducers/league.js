import {
    FETCH_LEAGUE_SUCCESS,
    FETCH_LEAGUE_ERROR,
    FETCH_LEAGUE_PENDING,
    RESET_LEAGUE,
    FETCH_LOCAL_LEAGUE_PENDING,
    FETCH_LOCAL_LEAGUE_SUCCESS,
    FETCH_LOCAL_LEAGUE_ERROR,
} from '../actions/league';
const initialState = {
    league: [{
        queueType: "RANKED_TFT",
        tier: "UNRANKED",
        rank: "",
        leaguePoints: "",
        wins: 0,
        losses: 0,
        veteran: true,
        inactive: false,
        freshBlood: false,
        hotStreak: false
    }],
    pending: false,
    error: undefined,
    local_league: [],
    local_pending: true,
    local_error: undefined,
};

const LeagueReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEAGUE_SUCCESS:
            return {
                ...state,
                pending: false,
                error: undefined,
                league: action.league,
            }
        case FETCH_LEAGUE_PENDING:
            return {
                ...state,
                pending: true,
                error: undefined,
            }
        case FETCH_LEAGUE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case FETCH_LOCAL_LEAGUE_SUCCESS:
            return {
                ...state,
                local_pending: false,
                error: undefined,
                local_league: action.league,
            }
        case FETCH_LOCAL_LEAGUE_PENDING:
            return {
                ...state,
                local_pending: true,
                error: undefined,
            }
        case FETCH_LOCAL_LEAGUE_ERROR:
            return {
                ...state,
                error: action.error,
                pending: false,
            }
        case RESET_LEAGUE:
            return initialState;
        default:
            return state;
    }
};


export default LeagueReducer;