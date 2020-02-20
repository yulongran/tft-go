import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Block, Text, Button } from '../../components';
import { ItemCard } from './components';
import BaseItem from 'tftgo/assets/set2/base_items.json';

const { width, height } = Dimensions.get('window');

class Item extends React.Component {
    render() {
        return (
            <ImageBackground source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/images/srsnowdownbackground.png")} style={styles.imagebackground}>
                <SafeAreaView style={styles.container}>
                    <Block flex={1} />
                    <Block flex={6}>
                        <FlatList
                            data={Object.keys(BaseItem)}
                            renderItem={({ item }) => (
                                <ItemCard name={item} stats={BaseItem[item]} navigation={this.props.navigation}/>
                            )}
                            keyExtractor={item => item.toString()}
                            numColumns={2}
                        />
                    </Block>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imagebackground: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})


export default Item;