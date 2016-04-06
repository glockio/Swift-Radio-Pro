import React from 'react-native';
import codePush from "react-native-code-push";
import Icon from "react-native-vector-icons/Ionicons";
import PlayControls from './playControls'
import FeaturesPage from './featuresPage'

const {
    AppRegistry,
} = React;

AppRegistry.registerComponent('FeaturesPage', () => FeaturesPage);
AppRegistry.registerComponent('PlayControls', () => PlayControls);