import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image, Modal } from 'react-native';
import { Block, Text, InputWithIcon, Button } from '../../components';
import { theme } from '../../constants';
import { SummonerCard, RegisterCard } from './components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeRegion } from '../../store/actions/region';
import { changeSummoner, localSummonerChange, fetchLocalSummoner } from '../../store/actions/summoner';
import AsyncStorage from '@react-native-community/async-storage';


const { width, height } = Dimensions.get('window');

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_visible: false,
            local_summoner_exists: false,
        }
    }

    /** Search Input listener */
    onChangeSearch = (search) => {
        this.props.changeSummoner(search);
    }

    onPressSearch = () => {
        this.props.navigation.navigate("Summoner");
    }

    onCloseModal = () => {
        this.setState({
            modal_visible: false,
        })
    }

    onOpenModal = () => {
        this.setState({
            modal_visible: true,
        })
    }

    onSubmitModal = (e) => {
        this.storeLocalSummoner(e.nativeEvent.text);
        this.props.localSummonerChange();
        this.getLocalSummoner();
        this.onCloseModal();
    }

    storeLocalSummoner = async (summoner) => {
        try {
            await AsyncStorage.setItem('summoner', summoner);
        } catch (e) {
            console.log(e);
        }
    }

    getLocalSummoner = async () => {
        try {
            const value = await AsyncStorage.getItem('summoner')
            if (value !== null) {
                this.setState({local_summoner_exists: true,});
            }
            else{
                this.setState({local_summoner_exists: false});
            }
        } catch (e) {
            console.log(e);;
        }
    }

    componentDidMount(){
        this.getLocalSummoner();
    }

    componentDidUpdate(){
        if(this.props.summoner.local_summoner_change){
            this.getLocalSummoner();
        }
    }

    render() {
        return (
            <Block>
                <StatusBar barStyle="light-content" />
                <Block flex={1}>
                    <ImageBackground source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/images/srsnowdownbackground.png")} style={styles.imagebackground} />
                </Block>
                <Block margin={{ top: -height * 0.1 }} center style={styles.contentContainer} color={theme.colors.white} flex={1.5}>
                    <InputWithIcon containerStyle={{ marginTop: -height * 0.03 }} onChangeText={this.onChangeSearch} onSubmitEditing={(event) => { this.onPressSearch }} />
                    <Block center middle flex={1} row>
                        <Image source={require("/Users/yulongran/react-native/TFT-ASSISTANT/tftgo/assets/images/penguin_logo.png")} style={styles.titleLogo} />
                        <Text h1 center bold>Teamfight.
                        <Text h1 primary>Tactics</Text>
                        </Text>
                    </Block>
                    <Block flex={1.5}>
                        {/* {console.log(this.props.summoner)} */}
                        {this.state.local_summoner_exists || !this.props.summoner.local_error ? <SummonerCard getLocalSummoenr={this.getLocalSummoner} navigation={this.props.navigation}/>: <RegisterCard onPress={this.onOpenModal} />}
                    </Block>
                    <Block bottom style={styles.searchButton} margin={{ top: height * 0.03 }} space="around">
                        <Button gradient onPress={this.onPressSearch}>
                            <Text center semibold white>Search</Text>
                        </Button>
                        <Button onPress={() => { }}>
                            <Text center sembold gray>Terms of Services</Text>
                        </Button>
                    </Block>
                </Block>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modal_visible}>
                    <Block center middle>
                        <InputWithIcon
                            placeholder="Enter your summoner name"
                            containerStyle={{ marginTop: -height * 0.03 }}
                            onChangeText={() => { }}
                            onSubmitEditing={this.onSubmitModal}
                        />
                    </Block>
                </Modal>
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
    searchButton: {
        width: width * 0.8,
    },
    titleLogo: {
        width: width * 0.13,
        height: width * 0.13,
        marginRight: width * 0.05,
    },
})


const mapStateToProps = (state) => {
    const { region, summoner, league } = state
    return { region, summoner, league }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        changeRegion,
        changeSummoner,
        localSummonerChange,
        fetchLocalSummoner,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);