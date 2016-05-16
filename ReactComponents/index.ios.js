import React from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import PlayControls from './playControls' // native module example
import ModalExample from './modalExample'  // modal example
import PushRouteExample from './pushRouteExample' // push route example + subrouting

const {
    AppRegistry,
	NativeModules,
} = React

AppRegistry.registerComponent('FeaturesPage', () => ModalExample)
AppRegistry.registerComponent('PlayControls', () => PlayControls)