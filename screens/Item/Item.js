import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Block, Text, Button } from '../../components';
import { ItemCard } from './components';

const { width, height } = Dimensions.get('window');

class Item extends React.Component {
    render() {
        const data = [1, 2, 3, 4,5,6,7,8];
        return (
            <ImageBackground source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/images/srsnowdownbackground.png")} style={styles.imagebackground}>
                <SafeAreaView style={styles.container}>
                    <Block flex={1} />
                    <Block flex={6}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <ItemCard />
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