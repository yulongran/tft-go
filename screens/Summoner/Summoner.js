import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Dimensions, Image, FlatList, ActivityIndicator } from 'react-native';
import { Block, Text, Avatar, Divider } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIcon } from '../../constants/icon';
import { getRankIcon } from '../../constants/rank';
import { getCompamion } from '../../constants/compamion';
import { getChampion } from '../../constants/champion';
import { getItem } from '../../constants/item';


const { width, height } = Dimensions.get('window');
class Summoner extends React.Component {

    /** Compute percentage win rate */
    getWinRate = (win, lose) => {
        if (win == 0 && lose == 0) {
            return 100 + "%"
        }
        return (win / (win + lose)).toFixed(3) * 100 + "%";
    }



    /** Get summoner companion id */
    getMyCompanion = (content_ID) => {
        var companions = require('tftgo/constants/json/companions.json');
        let location = undefined;
        companions.map((c) => {
            if (c.contentId == content_ID) {
                location = c.loadoutsIcon;
                location = location.toLowerCase();
                location = location.replace(/_/g, "");
                location = location.replace("/lol-game-data/assets/assets/loadouts/companions/", "")
                location = location.replace(".png", "")
                location = location.replace('.', "");
            }
        })
        return getCompamion(location)
    }

    /** Get summoner game stats from a game stats */
    getMyMatch = (match) => {
        let result = undefined;
        match.info.participants.map((p) => {
            if (p.puuid == this.props.summoner.summoner_profile.puuid) {
                result = p;
            }
        })
        return result
    }

    /** Source from https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds */
    fmtMSS(s) {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + Math.floor(s)
    }

    /** Get summoner placement from a match game */
    getMyPlacement = (match) => {
        let placement = undefined;
        match.info.participants.map((p) => {
            if (p.puuid == this.props.summoner.summoner_profile.puuid) {
                placement = p.placement;
            }
        })
        switch (placement) {
            case 1:
                return "1st"
            case 2:
                return "2nd"
            case 3:
                return "3rd"
            default:
                return `${placement}th`;
        }
    }

    render() {
        const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (
            <Block flex={1}>
                <StatusBar barStyle="light-content" />
                <LinearGradient colors={['#243B55', '#141E30']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
                    <FlatList
                        ListHeaderComponentStyle={styles.listHeaderStyle}
                        ListHeaderComponent={
                            <SafeAreaView style={{ flex: 1 }}>
                                <Icon name="chevron-left" size={width * 0.07} color="#ffffff" style={styles.backButton} onPress={() => { this.props.navigation.goBack(null) }} />
                                <Block flex={1} style={styles.summonerStats}>
                                    <Block center middle row flex={1.5}>
                                        <Avatar image={getIcon(this.props.summoner.summoner_profile.profileIconId)} width={width * 0.2} height={width * 0.2} />
                                        <Block middle flex={2.5} margin={{ left: width * 0.08 }} space="between">
                                            <Text white bold size={width * 0.08}>{this.props.summoner.summoner_profile.name}</Text>
                                            <Text />
                                            <Text white caption gray2>Ladder Rank: 76 (0.04% of top)</Text>
                                        </Block>
                                    </Block>
                                </Block>
                                <Block flex={1} style={styles.summonerRank} row middle center>
                                    <Block>
                                        <Text white bold style={styles.summonerStatsGap} size={width * 0.04}>{this.props.league.league[0].wins + this.props.league.league[0].losses}</Text>
                                        <Text white>Played</Text>
                                    </Block>
                                    <Block>
                                        <Text white bold style={styles.summonerStatsGap} size={width * 0.04}>{this.props.league.league[0].wins}</Text>
                                        <Text white>Win Games</Text>
                                    </Block>
                                    <Block>
                                        <Text white bold style={styles.summonerStatsGap} size={width * 0.04}>{this.getWinRate(this.props.league.league[0].wins, this.props.league.league[0].losses)}</Text>
                                        <Text white>Win Rate</Text>
                                    </Block>
                                </Block>
                                <Block flex={0.25} center >
                                    <Divider width={width * 0.8} opacity={0.5} />
                                </Block>
                                <Block flex={1} center middle center row style={styles.summonerRank}>
                                    <Block flex={1} center >
                                        {this.props.league.pending ? <ActivityIndicator size="large" color="#0000ff" /> : <Avatar image={getRankIcon(this.props.league.league[0].tier)} width={width * 0.18} height={width * 0.18} />}
                                    </Block>
                                    <Block flex={2} center>
                                        <Text white semibold h2>
                                            {this.props.league.league[0].tier}
                                        </Text>
                                        <Text white semibold h3>
                                            {this.props.league.league[0].leaguePoints} LP
                                        </Text>
                                    </Block>
                                </Block>
                                <Block flex={1} style={styles.matchHistory}>
                                    <Block row middle center margin={{ left: width * 0.1, right: width * 0.1 }} >
                                        <Block center middle>
                                            <Image source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/logo/LOL-Logo.png")} />
                                        </Block>
                                        <Block flex={10} center middle>
                                            <Text h2 bold>MATCH HISTORY</Text>
                                        </Block>
                                    </Block>
                                </Block>
                            </SafeAreaView>
                        }
                        data={this.props.match.matchList}
                        renderItem={({ item, index }) =>
                            <Block center row flex={false} style={styles.matchGame} key={index.toString()}>
                                <Block center>
                                    <Avatar image={this.getMyCompanion(this.getMyMatch(item).companion.content_ID)} width={width * 0.15} height={width * 0.15} />
                                </Block>
                                <Block middle flex={1}>
                                    <Text bold h1>{this.getMyPlacement(item)}</Text>
                                    <Text light caption>{item.info.queue_id === 1090 ? "Normal" : "Rank"}   {this.fmtMSS(item.info.game_length)}</Text>
                                    <Text light caption>{new Date(item.info.game_datetime).toLocaleDateString("en-US")}</Text>
                                </Block>
                                <Block center flex={2.2} wrap margin={{ left: 10 }} row >
                                    {this.getMyMatch(item).units.map((champion, index) => {
                                        return <Block style={styles.matchChampion} flex={false} key={index.toString()}>
                                            <Avatar image={getChampion(champion.name)} width={width * 0.07} height={width * 0.07} />
                                            <Block row center>
                                                {champion.items.map(item => (
                                                    <Image source={getItem(item)} style={styles.itemImage} />
                                                ))}
                                            </Block>
                                        </Block>
                                    })}
                                </Block>
                            </Block>
                        }
                        keyExtractor={item => item.id}
                    />
                    <SafeAreaView style={{ flex: 1 }}>
                    </SafeAreaView>
                </LinearGradient >
            </Block>
        )
    }
}


const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        opacity: 0.95,
    },
    backButton: {
        marginLeft: width * 0.05,
        marginTop: height * 0.01,
    },
    summonerStats: {
        paddingLeft: width * 0.13,
        paddingRight: width * 0.11,
    },
    summonerIconContainer: {
        width: width * 0.10,
        height: width * 0.2,
        borderRadius: width * 0.2 / 2,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    summonerIcon: {
        flex: 1,
        width: width * 0.2,
        height: height * 0.2,
    },
    summonerStatsGap: {
        marginBottom: height * 0.01
    },
    summonerRank: {
        marginTop: height * 0.02,
        paddingLeft: width * 0.13,
        paddingRight: width * 0.11,
    },
    matchHistory: {
        marginTop: height * 0.015,
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: width * 0.15,
        borderTopRightRadius: width * 0.15,
    },
    matchGame: {
        backgroundColor: theme.colors.white,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
        height: height * 0.12,
        borderBottomColor: "#EBEEF7",
        borderBottomWidth: height * 0.008,
    },
    itemImage: {
        width: width * 0.08 / 3,
        height: width * 0.08 / 3,
    },
    matchChampion: {
        width: width * 0.073,
        height: width * 0.08,
        margin: width * 0.008,
    },
    listHeaderStyle: {
        height: height * 0.5,
    },
})



const mapStateToProps = (state) => {
    const { region, summoner, league, match } = state
    return { region, summoner, league, match }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);