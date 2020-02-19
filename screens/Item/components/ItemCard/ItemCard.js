import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator, Image } from 'react-native';
import { Block, Text, Avatar } from '../../../../components';
import { theme } from '../../../../constants';

const { width, height } = Dimensions.get('window');

class ItemCard extends React.Component {

    render() {
        return (
            < TouchableOpacity>
                <Block color="white" shadow flex={1} style={styles.itemContainer}>
                    <Text h2 bold>BF Sword</Text>
                    <Image source={require("tftgo/assets/set2/new_item_icons/1.png")} style={styles.itemImage} />
                    <Text style={styles.stats} >+15 Attack Damge</Text>
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

        alignItems: 'center',
        paddingTop: width * 0.05,
        paddingBottom: width * 0.05,
        paddingLeft: width * 0.02,
        paddingRight: width * 0.02,
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


export default ItemCard;