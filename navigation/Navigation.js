import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { SearchScreen, SummonerScreen, ChampionScreen } from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../constants';

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
            screen: SummonerStack,
            navigationOptions: {
                tabBarLabel: 'SUMMONER',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                    <Icon name="search" size={theme.sizes.h2} color={tintColor} />
                ),
            }
        },
        Champion: {
            screen: ChampionScreen,
            navigationOptions: {
                tabBarLabel: 'CHAMPION',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                    <Icon name="dragon" size={theme.sizes.h2} color={tintColor} />
                ),
            }
        },
        Trait: {
            screen: ChampionScreen,
            navigationOptions: {
                tabBarLabel: 'TRAIT',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                    <Icon name="teamspeak" size={theme.sizes.h2} color={tintColor} />
                ),
            }
        },
        Item: {
            screen: ChampionScreen,
            navigationOptions: {
                tabBarLabel: 'Item',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                    <Icon name="tools" size={theme.sizes.h2} color={tintColor} />
                ),
            }
        },

    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: theme.colors.white,
                borderTopWidth: 0,
                paddingTop: theme.sizes.padding / 6,
            },
            labelStyle: {
                fontSize: theme.sizes.caption,
                color: theme.colors.black,
            },
            inactiveTintColor: theme.colors.primary,
            activeTintColor: theme.colors.secondary,
            keyboardHidesTabBar: true,
            showIcon: true,
        }
    },
)



export default createAppContainer(TabNavigator);