import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Block, Text, Button } from '../../components';
import { TraitCard } from './components';
import TraitList from 'tftgo/assets/set2/traits.json';

const { width, height } = Dimensions.get('window');

class Trait extends React.Component {
    render() {
        return (
            <ImageBackground source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/images/srsnowdownbackground.png")} style={styles.imagebackground}>
                <SafeAreaView style={styles.container}>
                    <Block flex={1} />
                    <Block flex={6}>
                        <FlatList
                            data={TraitList}
                            renderItem={({ item }) => (
                                <TraitCard trait={item}/>
                            )}
                            keyExtractor={item => item.name}
                            numColumns={3}
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


export default Trait;