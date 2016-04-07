import React from 'react-native'
import codePush from "react-native-code-push"
import Txt from './appText'
import Icon from "react-native-vector-icons/Ionicons"

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    NativeModules,
    Navigator,
    InteractionManager
} = React

const Routeable = NativeModules.Routeable

class FeaturesPage extends React.Component {

    componentDidMount(){
        // InteractionManager.runAfterInteractions( () => {
        //     if(!this.props.DEV_MODE) {
        //       codePush.sync()
        //     }
        // })
    }

    _handelDismiss() {
        this.props.dismissHandler()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.container, styles.body]}>
                    <View style={{flex:0,flexDirection:'row'}}>
                        <View style={{flex: 5}}>
                            <Image source={{uri: 'logo'}} style={{width: 126, height: 49}}/>
                        </View>
                        <View style={{flex: 7, justifyContent: 'center'}}>
                            <Txt style={[styles.text, {fontWeight: '400'}]}>Xcode 7/Swift 2</Txt>
                            <Txt style={styles.text}>Radio App</Txt>
                        </View>
                    </View>

                    <View style={styles.featureList}>
                        <Txt>
                            FEATURES:{'\n'}
                            + Displays Artist, Track and Album/Station Art on lock screen.{'\n'}
                            + Background Audio performance{'\n'}
                            + Last FM API integration to automatically download album art {'\n'}
                            + Loads and parses Icecast metadata (i.e. artist & track names) {'\n'}
                            + Ability to update stations from server without resubmitting to the app store.
                        </Txt>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={ () => this._handelDismiss() }>
                        <View style={styles.button}>
                            <Txt style={{fontWeight: '500'}}>Okay</Txt>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 18,
    },
    featureList: {
        marginTop: 15,
        marginLeft: 5,
    },
    body: {
        marginTop: 40,
        padding: 10,
    },
    footer: {
        padding: 10,
    },
    button: {
        backgroundColor: 'rgb(38,38,40)',
        flex: 1,
        borderRadius: 0,
        padding: 8,
        margin: 10,
        alignItems: 'center',
    },
    navBar: {
        backgroundColor: 'rgb(44,44,49)',
    },
    navBarText: {
        fontSize: 20,
        color: 'white',
    },
})

export default FeaturesPage