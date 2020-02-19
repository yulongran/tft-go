import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { Block, Text, Avatar } from '../../../../components';
import { theme } from '../../../../constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIcon } from '../../../../constants/icon';
import { fetchLocalSummoner, localSummonerUpdate, localSummonerChange, changeSummoner } from '../../../../store/actions/summoner';
import { fetchLocalLeague } from '../../../../store/actions/league';
import AsyncStorage from '@react-native-community/async-storage';

const { width, height } = Dimensions.get('window');

class SummonerCard extends React.Component {

    getLocalSummoner = async () => {
        try {
            const value = await AsyncStorage.getItem('summoner')
            if (value !== null) {
                this.props.fetchLocalSummoner(value, this.props.region.region);
            }
        } catch (e) {
            console.log(e);;
        }
    }

    componentDidMount() {
        this.getLocalSummoner();
    }

    componentDidUpdate() {
        // After the summoner profile updated and have not yet called fetch summoner league
        if (this.props.summoner.local_summoner_change && !this.props.summoner.local_summoner_update) {
            this.props.fetchLocalLeague(this.props.summoner.local_summoner_profile.id, this.props.region.region);
            this.props.localSummonerUpdate();
        }
    }

    /** Compute percentage win rate */
    getWinRate = (win, lose) => {
        if (win == 0 && lose == 0) {
            return 100 + "%"
        }
        return ((win / (win + lose)) * 100).toFixed(1) + "%";
    }

    /** Remove Summoner  */
    async removeItemValue() {
        try {
            await AsyncStorage.removeItem("summoner");
            this.props.localSummonerChange();
            return true;
        }
        catch (exception) {
            return false;
        }
    }

    onLongPressSummonerCard = () => {
        Alert.alert(
            'Edit Local Summoner',
            '',
            [
                { text: 'Yes', onPress: () => { this.removeItemValue() } },
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel',
                },
            ],
            { cancelable: false },
        );
    }

    onPressSummonerCard = async () => {
        try {
            const value = await AsyncStorage.getItem('summoner')
            if (value !== null) {
                this.props.changeSummoner(value);
                this.props.navigation.navigate("Summoner");
            }
        } catch (e) {
            console.log(e);;
        }
    }

    render() {
        return (
            < TouchableOpacity onLongPress={this.onLongPressSummonerCard} onPress={this.onPressSummonerCard}>
                {this.props.league.local_pending ? <ActivityIndicator size="large" color="#0000ff" style={styles.loadingStyle} /> :
                    <Block style={styles.summonerCard} color={theme.colors.white}>
                        <Block flex={1} row center style={{ marginBottom: 10 }}>
                            <Block flex={1} center>
                                <Avatar image={getIcon(this.props.summoner.local_summoner_profile.profileIconId)} width={width * 0.15} height={width * 0.15} />
                            </Block>
                            <Block flex={1.5} middle>
                                <Text h2 bold>{this.props.summoner.local_summoner_profile.name}</Text>
                                <Block flex={0.5} />
                                <Text color={theme.colors.tertiary}>{this.props.league.local_league[0].tier + " "}{this.props.league.local_league[0].leaguePoints + "LP"}</Text>
                            </Block>
                        </Block>
                        <Block flex={1}>
                            <Block row flex={1}>
                                <Block row center middle flex={1}>
                                    <Text body2 bold color="#9DA3B4">Played </Text>
                                    <Text body2 color="#9DA3B4">{this.props.league.local_league[0].wins + this.props.league.local_league[0].losses} Games</Text>
                                </Block>
                                <Block row center middle flex={1}>
                                    <Text body2 bold color="#9DA3B4">Win </Text>
                                    <Text body2 color="#9DA3B4">{this.props.league.local_league[0].wins} Games</Text>
                                </Block>
                            </Block>
                            <Block row flex={1}>
                                <Block row center middle flex={1}>
                                    <Text body2 bold color="#9DA3B4">Win rate </Text>
                                    <Text body2 color="#9DA3B4">{this.getWinRate(this.props.league.local_league[0].wins, this.props.league.local_league[0].losses)}</Text>
                                </Block>
                                <Block row center middle flex={1}>
                                    <Text body2 bold color="#9DA3B4">Lose </Text>
                                    <Text body2 color="#9DA3B4">{this.props.league.local_league[0].losses} Games</Text>
                                </Block>
                            </Block>
                        </Block>
                    </Block>}
            </TouchableOpacity >
        )
    }
}


const styles = StyleSheet.create({
    summonerCard: {
        width: width * 0.8,
        borderRadius: width * 0.05,
        padding: width * 0.05,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    loadingStyle: {
        flex: 1,
        alignSelf: 'center',
    },
})


const mapStateToProps = (state) => {
    const { region, summoner, league } = state
    return { region, summoner, league }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchLocalSummoner,
        fetchLocalLeague,
        changeSummoner,
        localSummonerUpdate,
        localSummonerChange,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SummonerCard);