import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Dimensions, Image } from 'react-native';
import { Block, Text, Avatar } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');
class Summoner extends React.Component {

    render() {
        return (
            <Block flex={1}>
                <StatusBar barStyle="light-content" />
                <LinearGradient colors={['#243B55', '#141E30']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <Icon name="chevron-left" size={width * 0.07} color="#ffffff" style={styles.backButton} />
                        <Block flex={1} style={styles.summonerStats} style={{backgroundColor:'red'}}>
                            <Block center middle row flex={1.5}>
                                <Block middle center flex={1} style={styles.summonerIconContainer}>
                                    <Image source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/images/penguin_logo.png")} style={styles.summonerIcon} />
                                </Block>
                                <Block middle flex={2.5} margin={{ left: width * 0.08 }} space="between">
                                    <Text white h1 bold>TEST #1</Text>
                                    <Text white caption gray2>Ladder Rank: 76 (0.04% of top)</Text>
                                </Block>
                            </Block>
                            <Block row flex={1}>

                            </Block>
                        </Block>
                        <Block flex={1} style={styles.summonerRank}>

                        </Block>
                        <Block flex={4} style={styles.matchHistroy}>
                            <Avatar image={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/images/penguin_logo.png")}/>
                        </Block>
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
        paddingLeft: width * 0.15,
        paddingRight: width * 0.13,
    },
    summonerIconContainer: {
        width: width * 0.10,
        height: width * 0.2,
        borderRadius: width*0.2/2,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    summonerIcon: {
        flex: 1,
        width: width * 0.2,
        height: height * 0.2,
    },
    summonerRank: {

    },
    matchHistroy: {
        backgroundColor: 'white',
        borderTopLeftRadius: width * 0.15,
        borderTopRightRadius: width * 0.15,
    },
})


export default Summoner;