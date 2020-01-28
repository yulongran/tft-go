import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Block, Text } from '../../../../components';
import { theme } from '../../../../constants';


const { width, height } = Dimensions.get('window');

class SummonerCard extends React.Component {

    render() {
        return (
            <TouchableOpacity>
                <Block style={styles.summonerCard} color={theme.colors.white}>
                    <Block flex={1} row center style={{marginBottom: 10}}>
                        <Block flex={1} center>
                            <Image source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/images/penguin_logo.png")} style={styles.avatar} />
                        </Block>
                        <Block flex={1.5} middle>
                            <Text h2 bold>Lion meng m</Text>
                            <Block flex={0.5} />
                            <Text color={theme.colors.tertiary}>UNRANKED</Text>
                        </Block>
                    </Block>
                    <Block flex={1}>
                        <Block row flex={1}>
                            <Block row center middle flex={1}>
                                <Text body2  bold color="#9DA3B4">Played </Text>
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
    avatar: {
        width: width * 0.15,
        height: width * 0.15,
    },
})


export default SummonerCard;