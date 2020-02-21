import { FETCH_LEADERBOARD } from '../actions/leaderboard';

const initialState = {
    leaderboard: [],
    pending: false,
    error: undefined,
};

const leaderBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEADERBOARD:
            return {
                leaderboard: action.leaderboard,
            }
        default:
            return state;
    }
    return state;
};




export default leaderBoardReducer;