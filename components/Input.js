import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../constants'
import { Block } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

class InputWithIcon extends React.Component {
    render() {
        const {
            leftComponent,
            rightComponent,
            containerStyle,
            onChangeText,
            placeholder,
            textInputStyle,
            ...props
        } = this.props;
        return (
            <View style={[containerStyle, styles.inputContainer]}>
                <Block>
                    {leftComponent || <Icon name="search" size={theme.sizes.h3} color={theme.colors.primary} />}
                </Block>
                <Block flex={7}>
                    <TextInput
                        style={[textInputStyle, styles.textInput]}
                        onChangeText={onChangeText}
                        placeholder={placeholder || "Search summoner name"}
                        {...props}
                    />
                </Block>
                <Block>
                    {rightComponent || null}
                </Block>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: width * 0.85,
        // Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        height: height * 0.09,
    },
    textInput: {
        height: 45,
        width: width * 0.6,
        fontSize: theme.sizes.h3 - 1,
        color: theme.colors.primary,
    },
});


export default InputWithIcon;