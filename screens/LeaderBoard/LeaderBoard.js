import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { Block, Text, Avatar } from 'tftgo/components';
import { theme } from 'tftgo/constants';


import { getItem } from 'tftgo/constants/item.js';

const { width, height } = Dimensions.get('window');

class LeaderBoard extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Block>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6]}
                        keyExtractor={item => item.toString()}
                        renderItem={({ item }) => (
                            <Block row center middle style={styles.summoner}>
                                <Block middle center >
                                    <Text>1</Text>
                                </Block>
                                <Block row center flex={5} >
                                    <Avatar image={require("tftgo/assets/icon/tooltipakalidragonbeatmakertier2.922littlelegends.png")} width={width * 0.1} height={width * 0.1} />
                                    <Text bold style={styles.name}>Little Sheep</Text>

                                </Block>
                                <Block row middle center flex={2} space="evenly">
                                    <Text>C1</Text>
                                    <Text>251 LP</Text>
                                </Block>
                            </Block>
                        )}
                    />
                </Block>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: width * 0.015,
        marginRight: width * 0.015,
    },
    summoner: {
        height: height*0.09,
        borderBottomColor: "#EBEEF7",
        borderBottomWidth: height * 0.008,
    },
    name: {
        marginLeft: width * 0.04,
    }
})


export default LeaderBoard;