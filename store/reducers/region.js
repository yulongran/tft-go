import { CHANGE_REGION } from '../actions/region';

const initialState = {
    region: 'NA1',
};

const regionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_REGION:
            const newState = { region: action.region };
            return newState;
        default:
            return state;
    }
    return state;
};


export default regionReducer;