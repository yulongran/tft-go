import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { SearchScreen, SummonerScreen, ItemScreen, BuildItemScreen, LeaderBoardScreen, TraitScreen } from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../constants';


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
 * Item Stack
 */
const ItemStack = createStackNavigator(
    {
        Item:
        {
            screen: ItemScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        BuildItem:
        {
            screen: BuildItemScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
    },
    {
        initialRouteName: 'Item',
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
                tabBarLabel: 'SEARCH',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                    <Icon name="search" size={theme.sizes.h2} color={tintColor} />
                ),
            }
        },
        Item: {
            screen: ItemStack ,
            navigationOptions: {
                tabBarLabel: 'Item',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                    <Icon name="dragon" size={theme.sizes.h2} color={tintColor} />
                ),
            }
        },
        Trait: {
            screen: TraitScreen,
            navigationOptions: {
                tabBarLabel: 'TRAIT',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                    <Icon name="teamspeak" size={theme.sizes.h2} color={tintColor} />
                ),
            }
        },
        LeaderBoard:{
            screen: LeaderBoardScreen,
            navigationOptions: {
                tabBarLabel: 'Leaderboard',
                tabBarIcon: ({ tintColor, activeTintColor }) => (
                    <Icon name="teamspeak" size={theme.sizes.h2} color={tintColor} />
                ),
            }
        }
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: theme.colors.white,
                borderTopWidth: 0,
                paddingTop: theme.sizes.padding / 6,
            },
            labelStyle: {
                fontSize: theme.sizes.caption-1,
                color: theme.colors.black,
                fontFamily: theme.fonts.family,
            },
            inactiveTintColor: theme.colors.primary,
            activeTintColor: theme.colors.secondary,
            keyboardHidesTabBar: true,
            showIcon: true,
        }
    },
)



export default createAppContainer(TabNavigator);