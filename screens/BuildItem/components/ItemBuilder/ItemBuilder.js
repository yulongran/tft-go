import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, SafeAreaView, Image, StatusBar, ImageBackground } from 'react-native';
import { Block, Text, Avatar } from 'tftgo/components';
import { theme } from 'tftgo/constants';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

class ItemBuilder extends React.Component {

    render() {
        return (
            <Block middle center row style={styles.container} space="evenly" color="white">
                <Icon name="plus" size={width * 0.07} color="#9DA3B4" />
                <Image source={require("tftgo/assets/set2/new_item_icons/1.png")} style={styles.mainItemImage} />
                <Icon name="equals" size={width * 0.07} color="#9DA3B4" />
                <Image source={require("tftgo/assets/set2/new_item_icons/1.png")} style={styles.mainItemImage} />
                <Block flex={0.6}>
                    <Text adjustsFontSizeToFit={true} numberOfLines={4}>On a kill or assist, gain an additional 15 Attack Damage until end of combat (Stacks infinitely)</Text>
                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.85,
        height: height * 0.12,
        borderRadius: width * 0.05,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        marginTop: height * 0.015,
        marginBottom: height * 0.015,
    },
    mainItemImage: {
        width: width * 0.09,
        height: width * 0.09,
        borderRadius: width * 0.025,
    }
})


export default ItemBuilder;