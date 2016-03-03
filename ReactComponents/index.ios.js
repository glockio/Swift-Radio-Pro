'use strict';

import React from 'react-native';

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} = React;

class SwiftRadio extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Test</Text>
            </View>
        );
    }
}
// <Image source={{uri: 'background'}} style={{width: 420, height: 680}}>

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent"
    },
    text: {
        fontSize: 24
    }
});

AppRegistry.registerComponent('SwiftRadio', () => SwiftRadio);