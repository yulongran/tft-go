import { FETCH_MATCH_ERROR, FETCH_MATCH_PENDING, FETCH_MATCH_SUCCESS, CLEAR_MATCH } from '../actions/match';
const initialState = {
    matchList: [],
    pending: false,
    error: undefined,
};

const matchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MATCH_SUCCESS:
            return {
                pending: false,
                error: undefined,
                matchList: action.matchList,
            };
        case FETCH_MATCH_PENDING:
            return {
                ...state,
                error: undefined,
                pending: true
            }
        case FETCH_MATCH_ERROR:
            return {
                ...state,
                matchList: [],
                pending: false,
                error: action.error
            }
        case CLEAR_MATCH:
            return {
                matchList: [],
                pending: false,
                error: undefined,
            }
        default:
            return state;
    }
};


export default matchReducer;