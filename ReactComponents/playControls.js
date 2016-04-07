import React from 'react-native'
import TimerMixin from 'react-timer-mixin'

const {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    NativeModules,
    InteractionManager,
    DeviceEventEmitter,
} = React

const MediaPlayer = NativeModules.Playable

class PlayControls extends React.Component {

  constructor() {
    super()
    this.state = {
      isPlaying: true,
      isLoading: true,
    }
  }

  componentDidMount() {
    MediaPlayer.setStation(this.props)
  }

  _play() {
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

  renderPauseButton(opacity) {
   return (
      <TouchableHighlight onPress= { () => this._pause()} activeOpacity={0.80} underlayColor={'transparent'} style={{opacity: opacity}}>
        <Image source={{uri: 'btn-pause'}} style={{width: 45, height: 45, marginRight: 10}}/>
      </TouchableHighlight>
    )
  }

  renderPlayButton(opacity) {
    return(
      <TouchableHighlight onPress={ () => this._play()} activeOpacity={0.8} underlayColor={'transparent'} style={{opacity: opacity}}>
        <Image source={{uri: 'btn-play'}} style={{width: 45, height: 45, marginRight: 10}}/>
      </TouchableHighlight>
    )
  }

  render(){
    const pauseButton = this.state.isPlaying ? this.renderPauseButton(0.5) : this.renderPauseButton(1.0)
    const playButton  = this.state.isPlaying ? this.renderPlayButton(1.0) : this.renderPlayButton(0.5)

    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row',overflow:'hidden'}}>
          {pauseButton}
          {playButton}
      </View>
    )
  }
}

export default PlayControls