import { CHANGE_ITEM } from '../actions/item';

const initialState = {
    item: 'B.F. Sword'
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ITEM:
            return{
                item: action.item,
            }
        default:
            return state;
    }
    return state;
};


export default itemReducer;