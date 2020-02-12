import { combineReducers } from 'redux';
import regionReducer from './region';
import summonerReducer from './summoner';
// import matchReducer from './match';
// import leagueReducer from './league';

const rootReducers = combineReducers({
    region: regionReducer,
    summoner: summonerReducer,
    // match: matchReducer,
    // league: leagueReducer,
});
export default rootReducers;