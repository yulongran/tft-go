import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Block, Text, InputWithIcon, Button } from '../../components';
import { theme } from '../../constants';


const { width, height } = Dimensions.get('window');

class Search extends React.Component {

    render() {
        return (
            <Block>
                <StatusBar barStyle="light-content" />
                <Block>
                    <ImageBackground source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/images/srsnowdownbackground.png")} style={styles.imagebackground} />
                </Block>
                <Block margin={{ top: -height * 0.1 }} center style={styles.contentContainer} color={theme.colors.white}>
                    <InputWithIcon containerStyle={{ marginTop: -height * 0.03 }} />
                    <Block center middle flex={1}>
                        <Text h1 center bold>Teamfight.
                        <Text h1 primary>Tactics</Text>
                        </Text>
                    </Block>
                    <Block style={styles.summonerCard} color={theme.colors.white} flex={1.5}>
                        <Text>Hello World</Text>
                    </Block>
                    <Block bottom style={styles.searchButton} margin={{top: height*0.05}} space="around">
                        <Button gradient>
                            <Text center semibold white>Search</Text>
                        </Button>
                        <Button onPress={() => { }}>
                            <Text center sembold gray>Terms of Services</Text>
                        </Button>
                    </Block>

                </Block>
            </Block>
        )
    }
}


const styles = StyleSheet.create({
    imagebackground: {
        width: '100%',
        height: '100%',
    },
    inputContainer: {
        marginTop: height * 0.7,
    },
    contentContainer: {
        borderTopLeftRadius: width * 0.09,
        borderTopRightRadius: width * 0.09,
    },
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
    searchButton: {
        width: width * 0.8,
    },
})


export default Search;