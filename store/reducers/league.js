import { FETCH_LEAGUE_SUCCESS, FETCH_LEAGUE_ERROR, FETCH_LEAGUE_PENDING, RESET_LEAGUE } from '../actions/league';
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
        case RESET_LEAGUE:
            return initialState;
        default:
            return state;
    }
};


export default LeagueReducer;