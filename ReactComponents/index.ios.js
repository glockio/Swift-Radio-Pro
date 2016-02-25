'use strict';

import React from 'react-native';

const {
    AppRegistry,
    StyleSheet,
    Text,
    View
} = React;

class SwiftRadio extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Booo YAHHHHH We Are LIVe :DD
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24
    }
});

AppRegistry.registerComponent('SwiftRadio', () => SwiftRadio);