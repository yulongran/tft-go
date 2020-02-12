import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Dimensions, Image, FlatList } from 'react-native';
import { Block, Text, Avatar, Divider } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../constants';

const { width, height } = Dimensions.get('window');
class Summoner extends React.Component {

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
                                <Icon name="chevron-left" size={width * 0.07} color="#ffffff" style={styles.backButton} onPress={()=>{this.props.navigation.goBack(null)}}/>
                                <Block flex={1} style={styles.summonerStats}>
                                    <Block center middle row flex={1.5}>
                                        <Avatar image={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/dragontail-9.24.2/9.24.2/img/profileicon/508.png")} />
                                        <Block middle flex={2.5} margin={{ left: width * 0.08 }} space="between">
                                            <Text white h1 bold>TEST #1</Text>
                                            <Text />
                                            <Text white caption gray2>Ladder Rank: 76 (0.04% of top)</Text>
                                        </Block>
                                    </Block>
                                </Block>
                                <Block flex={1} style={styles.summonerRank} row middle center>
                                    <Block>
                                        <Text white bold style={styles.summonerStatsGap}>532</Text>
                                        <Text white>Played</Text>
                                    </Block>
                                    <Block>
                                        <Text white bold style={styles.summonerStatsGap}>289</Text>
                                        <Text white>Win Games</Text>
                                    </Block>
                                    <Block>
                                        <Text white bold style={styles.summonerStatsGap}>123</Text>
                                        <Text white>Lose Games</Text>
                                    </Block>
                                </Block>
                                <Block flex={0.25} center >
                                    <Divider width={width * 0.8} />
                                </Block>
                                <Block flex={1} center middle center row style={styles.summonerRank}>
                                    <Block flex={1} center >
                                        <Avatar image={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/ranked-emblems/Emblem_Challenger.png")} width={width * 0.18} height={width * 0.18} />
                                    </Block>
                                    <Block flex={2} center>
                                        <Text white semibold h2>
                                            CHALLENGER
                                         </Text>
                                        <Text white semibold h3>
                                            1292 LP
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
                        data={test}
                        renderItem={({ item }) =>
                            <Block center row flex={false} style={styles.matchGame}>
                                <Block center>
                                    <Avatar image={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/icon/tooltipqiyanadogqiqitier3.922littlelegends.png")} width={width * 0.15} height={width * 0.15} />
                                </Block>
                                <Block middle flex={1}>
                                    <Text bold h1># 1</Text>
                                    <Text light caption>Normal   37:10</Text>
                                    <Text light caption>1/1/2020</Text>
                                </Block>
                                <Block center flex={2.2} wrap margin={{ left: 10 }} row >
                                    {test.map((c, index) => {
                                        return <Block style={styles.matchChampion} flex={false} key={index.toString()}>
                                            <Avatar image={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/dragontail-9.24.2/img/champion/splash/Sejuani_0.jpg")} width={width * 0.07} height={width * 0.07} />
                                            <Block row center middle>
                                                <Image source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/set2/new_item_icons/1.png")} style={styles.itemImage} />
                                                <Image source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/set2/new_item_icons/1.png")} style={styles.itemImage} />
                                                <Image source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/set2/new_item_icons/1.png")} style={styles.itemImage} />
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
        height: height * 0.45,
    },
})


export default Summoner;