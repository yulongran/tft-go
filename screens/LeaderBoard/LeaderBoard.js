import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Block, Text, Avatar } from 'tftgo/components';
import { theme } from 'tftgo/constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLeaderBoard } from 'tftgo/store/actions/leaderboard.js';
import { COMPAMION } from 'tftgo/constants/compamion.js';

import { getItem } from 'tftgo/constants/item.js';

const { width, height } = Dimensions.get('window');

class LeaderBoard extends React.Component {


    componentDidMount() {
        this.props.fetchLeaderBoard(this.props.region.region);
    }

    getSummonerRank = (summoner) => {
        if (summoner.rank === "CHALLENGER") {
            return <Text small white style={{ backgroundColor: '#ff5151', padding: 1 }}>C1</Text>
        }
        else if (summoner.rank === "GRANDMASTER") {
            return <Text small white style={{backgroundColor:'#550a46', padding: 1 }}>GM</Text>
        }
        return <Text small white style={{backgroundColor:'#f5dea3', padding: 1 }}>M</Text>
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Block>
                    {this.props.leaderboard.pending || this.props.leaderboard.error ? <ActivityIndicator size="large" color="#0000ff" style={styles.loadingStyle} /> :
                        <FlatList
                            data={this.props.leaderboard.leaderboard}
                            keyExtractor={item => item.summonerId}
                            renderItem={({ item, index }) => (
                                <Block row center middle style={styles.summoner}>
                                    <Block middle center >
                                        <Text>{index + 1}</Text>
                                    </Block>
                                    <Block row center flex={5} >
                                        <Avatar image={Object.values(COMPAMION)[index % Object.keys(COMPAMION).length ]} width={width * 0.1} height={width * 0.1} />
                                        <Text bold style={styles.name}>{item.summonerName}</Text>

                                    </Block>
                                    <Block row middle center flex={2} space="evenly">
                                        {this.getSummonerRank(item)}
                                        <Text>{item.leaguePoints} LP</Text>
                                    </Block>
                                </Block>
                            )}
                        />}
                </Block>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: width * 0.015,
        marginRight: width * 0.015,
    },
    summoner: {
        height: height * 0.09,
        borderBottomColor: "#EBEEF7",
        borderBottomWidth: height * 0.008,
    },
    name: {
        marginLeft: width * 0.04,
    },
    loadingStyle: {
        flex: 1,
        alignSelf: 'center',
    },
})


const mapStateToProps = (state) => {
    const { region, leaderboard } = state
    return { region, leaderboard }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchLeaderBoard
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);