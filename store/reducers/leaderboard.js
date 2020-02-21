import { FETCH_LEADERBOARD_SUCCESS, FETCH_LEADERBOARD_PENDING, FETCH_LEADERBOARD_ERROR } from '../actions/leaderboard';

const initialState = {
    leaderboard: [],
    pending: false,
    error: undefined,
};

const leaderBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEADERBOARD_SUCCESS:
            return {
                ...state,
                leaderboard: action.leaderboard,
                pending: false,
                error: undefined,
            }
        case FETCH_LEADERBOARD_PENDING:
            return {
                ...state,
                pending: true,
            }
        case FETCH_LEADERBOARD_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        default:
            return state;
    }
    return state;
};




export default leaderBoardReducer;