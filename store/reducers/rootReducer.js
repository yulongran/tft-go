import { combineReducers } from 'redux';
import regionReducer from './region';
import summonerReducer from './summoner';
import matchReducer from './match';
import leagueReducer from './league';
import itemReducer from './item';
import leaderBoardReducer from './leaderboard';

const rootReducers = combineReducers({
    region: regionReducer,
    summoner: summonerReducer,
    match: matchReducer,
    league: leagueReducer,
    item: itemReducer,
    leaderboard: leaderBoardReducer,
});
export default rootReducers;