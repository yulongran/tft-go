import { StyleSheet, Dimensions} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator} from 'react-navigation-stack';
import { SearchScreen, SummonerScreen, ChampionScreen} from '../screens';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


/**
 * Home-Summoner Search Stack
 */
const SummonerStack = createStackNavigator(
    {
        Search:
        {
            screen: SearchScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        Summoner:
        {
            screen: SummonerScreen,
            navigationOptions: {
               headerShown: false,      
            }
        },
    },
    {
        initialRouteName: 'Search',
    },
)

/**
 * App Tab Navigation
 */
const TabNavigator = createBottomTabNavigator(
    {
        Search: {
            screen: SummonerScreen,
            navigationOptions: {
                tabBarLabel: 'SUMMONER',
            }
        },
        Champion: {
            screen: ChampionScreen,
            navigationOptions: {
                tabBarLabel: 'CHAMPION',
            }
        }
    },
)



export default createAppContainer(TabNavigator);