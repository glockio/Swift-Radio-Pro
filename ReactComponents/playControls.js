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

} = React;

const MediaPlayer = NativeModules.Playable

class PlayControls extends React.Component {

  constructor() {
    super()
    this.state = {
      isPlaying: true,
      isLoading: true
    }
  }

  componentDidMount() {
    const props = this.props;

    this.frameRequest = requestAnimationFrame( () => {
      MediaPlayer.setStation(props)
    })

    this.onLoadStateChangeSubscription = DeviceEventEmitter.once("Playable.onLoadStateChange", () => {
      this.setState({isLoading: false})
    })
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameRequest)
    // clean up onLoadStateChangeSubscription
    this.onLoadStateChangeSubscription.remove();
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

  render(){
    let pauseButtonOpacity, playButtonOpacity = 1
    if(this.state.isPlaying) {
      pauseButtonOpacity = 0.5
    } else {
      playButtonOpacity = 0.5
    }

    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row',overflow:'hidden'}}>
        <TouchableHighlight onPress= { () => this._pause()} activeOpacity={0.80} underlayColor={'transparent'}>
          <Image source={{uri: 'btn-pause'}} style={{width: 45, height: 45, marginRight: 10, opacity:pauseButtonOpacity}}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => this._play()} activeOpacity={0.80} underlayColor={'transparent'}>
          <Image source={{uri: 'btn-play'}} style={{width: 45, height: 45, opacity:playButtonOpacity}}/>
        </TouchableHighlight>
        <Text> {this.state.isLoading && "Loading"}</Text>
      </View>
    )
  }
}

export default PlayControls