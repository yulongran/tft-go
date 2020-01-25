import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Block, Text, InputWithIcon, Button } from '../../components';

const {WIDTH, HEIGHT} = Dimensions.get('window');

class Search extends React.Component {

    render() {
        return (
            <ImageBackground source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/images/srsnowdownbackground.png")} style={styles.imagebackground}>
                <StatusBar barStyle="light-content" />
                <Block margin={{top: 500, left:20, right: 20}}>
                    <InputWithIcon/>
                </Block>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    imagebackground: {
        width: '100%',
        height: '75%',
    },
    inputContainer:{
        marginTop: HEIGHT*0.7,
    },
})


export default Search;