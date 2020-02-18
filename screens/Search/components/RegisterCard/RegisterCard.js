import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { Block, Text, Avatar } from '../../../../components';
import { theme } from '../../../../constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIcon } from '../../../../constants/icon';
import { fetchLocalSummoner, localSummonerUpdate } from '../../../../store/actions/summoner';
import { fetchLocalLeague } from '../../../../store/actions/league';
import { changeSummoner } from '../../../../store/actions/summoner';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

class SummonerCard extends React.Component {

    render() {
        return (
            < TouchableOpacity onPress={this.props.onPress}>
                <Block style={styles.summonerCard} color={theme.colors.white} middle center>
                    <Icon name="plus" size={theme.sizes.h2} color={"#92A8D1"} />
                    <Text light color="#92A8D1">Register Your Summoner ID</Text>
                </Block>
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
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#92A8D1',
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
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SummonerCard);