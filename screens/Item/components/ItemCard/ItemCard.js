import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator, Image } from 'react-native';
import { Block, Text, Avatar } from '../../../../components';
import { theme } from '../../../../constants';
import { getItem } from 'tftgo/constants/item.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeItem } from '../../../../store/actions/item';

const { width, height } = Dimensions.get('window');

class ItemCard extends React.Component {

    onPressItem = () => {
        this.props.changeItem(this.props.name);
        this.props.navigation.navigate("BuildItem");
    }

    render() {
        return (
            < TouchableOpacity onPress={this.onPressItem}>
                <Block color="white" shadow flex={1} style={styles.itemContainer}>
                    <Text h3 bold adjustsFontSizeToFit={true} numberOfLines={1}>{this.props.name}</Text>
                    <Image source={getItem(this.props.stats.id)} style={styles.itemImage} />
                    <Text style={styles.stats} >{this.props.stats.bonus}</Text>
                </Block>
            </TouchableOpacity >
        )
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        height: height * 0.18,
        width: width * 0.4,
        borderRadius: width * 0.05,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginTop: height * 0.03,
        marginBottom: height * 0.03,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: width * 0.045,
        paddingBottom: width * 0.05,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
        justifyContent: 'space-around',
    },
    itemImage: {
        width: width * 0.12,
        height: width * 0.12,
    },
    stats: {
        fontSize: width * 0.03,
        fontFamily: theme.fonts.family,
        color: theme.colors.black
    },
})


const mapStateToProps = (state) => {
    const { region, summoner, league, match } = state
    return { region, summoner, league, match }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        changeItem,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);