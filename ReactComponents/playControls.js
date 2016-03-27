import React from 'react-native'

const {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    NativeModules,
    InteractionManager
} = React;

const MediaPlayer = NativeModules.Playable

class PlayControls extends React.Component {

  constructor() {
    super()
    this.state = {
      isPlaying: true,
    }
  }

  componentDidMount() {
    console.log(this.props)
    MediaPlayer.setStation(this.props)
  }

  _play() {
    console.log("calling play in JS land")
    MediaPlayer.play()
    this.setState({
      isPlaying: true,
    })
  }

  _pause() {
    MediaPlayer.pause()
    this.setState({
      isPlaying: false,
    })
  }

  render(){
    return(
      <View style={{backgroundColor:'red'}}>
        <TouchableOpacity onPress={ () => this._play()}>
          <Image source={{uri: 'btn-play'}} style={{width: 45, height: 45}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress= { () => this._pause()}>
          <Image source={{uri: 'btn-pause'}} style={{width: 45, height: 45}}/>
        </TouchableOpacity>

        <Text>{this.props.stationName}</Text>
        <Text>Is playing: {this.state.isPlaying ? "Playing" : "Pause"}</Text>
      </View>
    )
  }
}

export default PlayControls