import React from 'react-native'
import FeaturesPage from './featuresPage'
const {
    NativeModules
} = React

const Routeable = NativeModules.Routeable

class ModalExample extends React.Component {

	closeModal() {
		console.log("Calling clode modal")
		Routeable.closeModal()
	}

	render() {
		return <FeaturesPage dismissHandler={ () => this.closeModal() }/>
	}
}

export default ModalExample

