## TFT-GO
### A mobile application in React Native that provides gaming stats and information about player matches for the game Team Fight Tactics.


## I Installation

Setting up 
Assuming React-Native and Xcode is installed 
------------

	git clone https://github.com/yulongran/tft-go.git
    cd tft-go
    npm install
    react-native run-ios


## II Major Features

<p float="left">
  <img src="assets/demo/Simulator Screen Shot - iPhone 11 - 2020-03-17 at 17.36.29.png" width="250" />
  <img src="assets/demo/Simulator Screen Shot - iPhone 11 - 2020-03-17 at 17.39.37.png" width="250" />
  <img src="assets/demo/Simulator Screen Shot - iPhone 11 - 2020-03-17 at 17.39.14.png" width="250" />
</p>

- TFT-GO will search your team's game records by your summoner name. 
- Analysis and track in-game information when the game starts

<p float="left">
  <img src="assets/demo/Simulator Screen Shot - iPhone 11 - 2020-03-17 at 17.40.07.png" width="250" />
  <img src="assets/demo/Simulator Screen Shot - iPhone 11 - 2020-03-17 at 17.39.49.png" width="250" /> 
<img src="assets/demo/Simulator Screen Shot - iPhone 11 - 2020-03-17 at 17.39.52.png" width="250" /> 
</p>

- TFT-GO will provide in-game data such as items, trait and real-time ranking in league.


## IV Server

Riot prohibits client-side calls to the Riot API in Mobile Apps; therefore, the project sets up a backend server in NodeJS that can make API calls while keeping your API key secure. 

- The server uses https://github.com/Sansossio/twisted library for fetching Riot's API data and request limits.

- Replace the API links under store/actions to connect to your own server:

```
export const fetchLocalLeague = (encryptedSummonerId, region) => {
    return dispatch => {
        dispatch(fetchLocalLeaguePending());
        fetch('https://tft-assistant.herokuapp.com/league/by-summoner', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                encryptedSummonerId: encryptedSummonerId,
                region: region,
            }),
        }).then(res => res.json())
            .then(res => {
                dispatch(fetchLocalLeagueSuccess(res.response));
                return res.response;
            }).catch(error => {
                dispatch(fetchLocalLeagueError(error));
            })
    }
}
```


The following API calls are supported by this project

## TFT Endpoints
### TFT-SUMMONER-V1
- [x] `Get a summoner by account ID.`
- [x] `Get a summoner by summoner name.`
- [x] `Get a summoner by PUUID.`
- [x] `Get a summoner by summoner ID.`
### TFT-MATCH-V1
- [x] `Get match list by summoner PUUID.`
- [x] `Get match list details.`
### TFT-LEAGUE-V1
- [x] `Get the challenger league for given queue.`
- [x] `Get league entries in all queues for a given summoner ID.`
- [x] `Get all the league entries.`
- [x] `Get league with given ID, including inactive entries.`
- [x] `Get the master league for given queue.`

