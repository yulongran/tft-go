import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Block, Text, Avatar } from '../../../../components';
import { theme } from '../../../../constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIcon } from '../../../../constants/icon';
import { fetchLocalSummoner } from '../../../../store/actions/summoner';
import { changeSummoner } from '../../../../store/actions/summoner';

const { width, height } = Dimensions.get('window');

class SummonerCard extends React.Component {


    componentDidMount() {
        this.props.fetchLocalSummoner("Little Sheep", this.props.region.region);
    }

    render() {
        return (
            <TouchableOpacity>
                <Block style={styles.summonerCard} color={theme.colors.white}>
                    <Block flex={1} row center style={{ marginBottom: 10 }}>
                        <Block flex={1} center>
                            <Avatar image={getIcon(this.props.summoner.local_summoner_profile.profileIconId)} width={width * 0.15} height={width * 0.15} />
                        </Block>
                        <Block flex={1.5} middle>
                            <Text h2 bold>{this.props.summoner.local_summoner_profile.name}</Text>
                            <Block flex={0.5} />
                            <Text color={theme.colors.tertiary}>UNRANKED</Text>
                        </Block>
                    </Block>
                    <Block flex={1}>
                        <Block row flex={1}>
                            <Block row center middle flex={1}>
                                <Text body2 bold color="#9DA3B4">Played </Text>
                                <Text body2 color="#9DA3B4">523 Games</Text>
                            </Block>
                            <Block row center middle flex={1}>
                                <Text body2 bold color="#9DA3B4">Win </Text>
                                <Text body2 color="#9DA3B4">289 Games</Text>
                            </Block>
                        </Block>
                        <Block row flex={1}>
                            <Block row center middle flex={1}>
                                <Text body2 bold color="#9DA3B4">Win rate </Text>
                                <Text body2 color="#9DA3B4">56 %</Text>
                            </Block>
                            <Block row center middle flex={1}>
                                <Text body2 bold color="#9DA3B4">Lose </Text>
                                <Text body2 color="#9DA3B4">132 Games</Text>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </TouchableOpacity>
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
})


const mapStateToProps = (state) => {
    const { region, summoner, league } = state
    return { region, summoner, league }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchLocalSummoner,
        changeSummoner,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SummonerCard);