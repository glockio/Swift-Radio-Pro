'use strict';
import React from 'react-native';
import codePush from "react-native-code-push";

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    NativeModules,
} = React;

// import { NativeModules } from 'react-native';
const CalendarManager = NativeModules.CalendarManager

const Routeable = NativeModules.Routeable

class SwiftRadio extends React.Component {
    componentDidMount(){
        if(!this.props.DEV_MODE) {
            codePush.sync()
        }
    }

    async _popReactNative() {
        try {
           var result = await CalendarManager.addEvent("HELLO MATE")
            console.log(result)
        } catch (e) {
           console.error(e);
        }
    }

    _popRoute() {
        console.log("calling pop route")
        Routeable.popRoute()
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={{uri: 'logo'}} style={{width: 126, height: 49}}/>
                    <Text style={styles.text}>Xcode 7/Swift 2 CHANGED!!!</Text>
                    <Text style={styles.text}> Radio App</Text>
                </View>

                <View style={styles.featureList}>
                    <Txt>
                        FEATURES: + Displays Artist, Track and Album/Station Art on lock screen.
                        + Background Audio performance
                        +Last FM API integration to automatically download album art
                        + Loads and parses Icecast metadata (i.e. artist & track names)
                        + Ability to update stations from server without resubmitting to the app store.
                    </Txt>
                </View>

                <TouchableOpacity onPress={ () => this._popRoute() }>
                    <View style={styles.button}>
                        <Txt>Work Work Work Work</Txt>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}


class Txt extends React.Component {
  render() {
    return <Text style={textStyles.text}> {this.props.children} </Text>
  }

}

const textStyles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'blue'
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        color: 'blue'
    },
    featureList: {

    },
    header: {

    },
    button: {
        backgroundColor: 'red',
        flex: 1,
        padding: 10,

    }
});

AppRegistry.registerComponent('SwiftRadio', () => SwiftRadio);