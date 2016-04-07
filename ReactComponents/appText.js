import React from 'react-native';

const {
    StyleSheet,
    Text,
} = React;

// Simple Component with base text styles
class AppText extends React.Component {
  render() {
    return <Text style={[textStyles.text, this.props.style]}> {this.props.children} </Text>
  }
}

const textStyles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'Avenir Next',
        color: 'white',
    },
});

export default AppText
