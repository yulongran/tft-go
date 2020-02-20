import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import { Block, Text, Avatar } from 'tftgo/components';
import { theme } from 'tftgo/constants';
import { ItemBuilder } from './components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Item from '../Item/Item';

const { width, height } = Dimensions.get('window');

class BuildItem extends React.Component {

    render() {
        const data = [1, 2, 3, 4]
        return (
            <Block>
                <StatusBar barStyle="light-content" />
                <LinearGradient colors={['#243B55', '#141E30']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
                    <SafeAreaView style={styles.container}>
                        <Icon name="chevron-left" size={width * 0.07} color="#ffffff" style={styles.backButton} onPress={() => { this.props.navigation.goBack(null) }} />
                        <Block middle row style={styles.mainItem}>
                            <Image source={require("tftgo/assets/set2/new_item_icons/1.png")} style={styles.mainItemImage} />
                            <Block />
                            <Block left flex={4}>
                                <Text white bold size={width * 0.07}>BF. Sword</Text>
                                <Text white gray2>+ 15 Attack Damge</Text>
                            </Block>
                        </Block>
                        <Block margin={{ top: -height * 0.1 }} style={styles.contentContainer} color={theme.colors.white} flex={3}>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => (
                                    <ItemBuilder />
                                )}
                                keyExtractor={item => item.toString()}
                                contentContainerStyle={{margin:10, marginTop: height*0.03}}
                            />
                        </Block>
                    </SafeAreaView>

                </LinearGradient>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        opacity: 0.95,
    },
    container: {
        flex: 1,
    },
    backButton: {
        marginLeft: width * 0.05,
        marginTop: height * 0.01,
    },
    contentContainer: {
        borderTopLeftRadius: width * 0.09,
        borderTopRightRadius: width * 0.09,
        alignItems: 'center',
    },
    mainItem: {
        marginTop: height * 0.02,
        marginLeft: width * 0.15,
        marginRight: width * 0.15,
    },
    mainItemImage: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.05,
    }
})


export default BuildItem;