export const CHANGE_REGION  = 'CHANGE_REGION';

export const changeRegion = (region) => {
    return {
        type: CHANGE_REGION,
        region: region,
    }
}