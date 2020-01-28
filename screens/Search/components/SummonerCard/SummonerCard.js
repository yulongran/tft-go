import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Block, Text } from '../../../../components';
import { theme} from '../../../../constants';

const {width, height} = Dimensions.get('window');

class SummonerCard extends React.Component {

    render() {
        return (
            <TouchableOpacity>
                <Block style={styles.summonerCard} color={theme.colors.white}>
                    <Text>Hello World</Text>
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


export default SummonerCard;