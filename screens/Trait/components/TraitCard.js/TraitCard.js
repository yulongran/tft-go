import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator, Image } from 'react-native';
import { Block, Text, Avatar } from '../../../../components';
import { theme } from '../../../../constants';
import { getTrait } from 'tftgo/constants/trait.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeItem } from '../../../../store/actions/item';

const { width, height } = Dimensions.get('window');

class TraitCard extends React.Component {

    onPressItem = () => {
        // this.props.changeItem(this.props.name);
        // this.props.navigation.navigate("BuildItem");
    }

    render() {
        return (
            < TouchableOpacity onPress={this.onPressItem}>
                <Block color="white" shadow flex={1} style={styles.itemContainer}>
                    <Text caption bold white>{this.props.trait.name}</Text>
                    <Image source={getTrait(this.props.trait.name)} style={styles.itemImage} />
                </Block>
            </TouchableOpacity >
        )
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        height: width * 0.25,
        width: width * 0.25,
        borderRadius: width * 0.05,
        marginLeft: width * 0.025,
        marginRight: width * 0.025,
        marginTop: height * 0.03,
        marginBottom: height * 0.03,
        backgroundColor: '#333333',
        alignItems: 'center',
        paddingTop: width * 0.045,
        paddingBottom: width * 0.05,
        paddingLeft: width * 0.025,
        paddingRight: width * 0.025,
        justifyContent: 'space-around',
    },
    itemImage: {
        width: width * 0.08,
        height: width * 0.08,
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

export default connect(mapStateToProps, mapDispatchToProps)(TraitCard);