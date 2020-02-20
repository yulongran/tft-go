export const CHANGE_ITEM  = 'CHANGE_ITEM';

export const changeItem = (item) => {
    return {
        type: CHANGE_ITEM,
        item: item,
    }
}