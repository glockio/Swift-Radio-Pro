import React from 'react-native';
import codePush from "react-native-code-push";
import Icon from "react-native-vector-icons/Ionicons";

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    NativeModules,
    Navigator,
    InteractionManager
} = React;

// import { NativeModules } from 'react-native';
const CalendarManager = NativeModules.CalendarManager
const Routeable = NativeModules.Routeable

class Screen extends React.Component {
    _getNavHeight() {
        try {
            // Try and get navBarTotal height
            this.props.nav.props.navigationBar.props.navigationStyles.General.TotalNavHeight
        } catch(error) {
            if (error instanceof TypeError) {
                undefined
            } else {
                throw error
            }
        }
    }
    render(){
        const navBarOffset = this._getNavHeight() || 64
        // HOC to apply navBarOffset set flex:1 on the rest of the page content
        return(
        <View style={{marginTop: navBarOffset, flex: 1}}>
            {React.cloneElement(this.props.children, {nav: this.props.nav})}
        </View>
        )
    }
}

// Define Router
class Router extends React.Component {

    renderScene(route, nav) {
        let Scene = undefined
        switch (route.name) {
          case 'aboutPage':
           Scene = <SwiftRadio/>
           break
          case 'testPage':
            Scene = <TestPage/>
            break
          default:
            Scene = <SwiftRadio/>
        }

        return <Screen nav={nav}>{Scene}</Screen>
    }

    render() {

        return(
            <Navigator
            initialRoute={ { name: "aboutPage", title: "Features", icon:'ios-book'} }
            renderScene={this.renderScene.bind(this)}
            navigationBar={
                <Navigator.NavigationBar
                    routeMapper={NavigationBarRouteMapper}
                    style={styles.navBar}
                />
            }
            configureScene={ (route) => {
                if (route.sceneConfig) {
                  return route.sceneConfig;
                }
                return Navigator.SceneConfigs.HorizontalSwipeJump;
            }}
            />
        )
    }
}

const NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    let previousRoute;
    let onBackPressHandler
    if (index === 0) {
        previousRoute = {title: 'Native App'}
        onBackPressHandler = () => Routeable.popRoute()
    } else {
        previousRoute = navState.routeStack[index - 1]
        onBackPressHandler = () => navigator.pop()
    }

    return (
      <TouchableOpacity
        onPress={onBackPressHandler}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, {marginLeft: 15, paddingTop: 5}]}>
          <Icon name="ios-arrow-back" size={35} style={{padding: 10}}/>
        </Text>
      </TouchableOpacity>
    )
  },

  RightButton: function(route, navigator, index, navState) {
    if(route.icon) {
        return <View style={{paddingTop:10, marginRight:25}}><Icon name={route.icon} size={23} style={{color: 'white'}}/></View>
    } else {
        return null;
    }
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Txt style={[styles.navBarText, {paddingTop: 8}]}>
        {route.title}
      </Txt>
    );
  },

};

// Test Page
class TestPage extends React.Component {

    _goBack() {
        this.props.nav.pop()
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.container, styles.body]}>
                    <Txt>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, et veritatis. Laborum aliquam optio animi sunt commodi magnam consectetur, sequi accusamus ipsum, quis veritatis officia harum, amet voluptatibus iure. Ipsum.</Txt>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={ () => this._goBack() }>
                        <View style={styles.button}>
                            <Txt>Go Back</Txt>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
// About Page
class SwiftRadio extends React.Component {
    componentDidMount(){
        InteractionManager.runAfterInteractions( () => {
            if(!this.props.DEV_MODE) {
              codePush.sync()
            }
        })
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

    _subPage() {
        this.props.nav.push({name: "testPage", title:'Info'})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.container, styles.body]}>
                    <View style={{flex:0,flexDirection:'row'}}>

                        <View style={{flex: 4}}>
                            <Image source={{uri: 'logo'}} style={{width: 126, height: 49}}/>
                        </View>
                        <View style={{flex: 8}}>
                            <Txt style={[styles.text, {fontWeight: '400'}]}>Xcode 7/Swift 2</Txt>
                            <Txt style={styles.text}> Radio App</Txt>
                        </View>
                    </View>

                    <View style={styles.featureList}>
                        <Txt>
                            FEATURES:{'\n'}
                            + Displays Artist, Track and Album/Station Art on lock screen.{'\n'}
                            + Background Audio performance{'\n'}
                            + Last FM API integration to automatically download album art {'\n'}
                            + Loads and parses Icecast metadata (i.e. artist & track names) {'\n'}
                            + Ability to update stations from server without resubmitting to the app store.
                        </Txt>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={ () => this._subPage() }>
                        <View style={styles.button}>
                            <Txt style={{fontWeight: '500'}}>Info</Txt>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ () => this._popRoute() }>
                        <View style={styles.button}>
                            <Txt style={{fontWeight: '500'}}>Okay</Txt>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}



class Txt extends React.Component {
  render() {
    return <Text style={[textStyles.text, this.props.style]}> {this.props.children} </Text>
  }

}

const textStyles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'Avenir Next',
        color: 'white',
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 18,
    },
    featureList: {
        marginTop: 15,
        marginLeft: 5
    },
    body: {
        marginTop: 10,
        padding: 10
    },

    footer: {
        padding: 10
    },

    button: {
        backgroundColor: 'rgb(38,38,40)',
        flex: 1,
        borderRadius: 0,
        padding: 8,
        margin: 10,
        alignItems: 'center',
    },
    navBar: {
        backgroundColor: 'rgb(44,44,49)',
    },
    navBarText: {
        fontSize: 20,
        color: 'white',
    }
});

AppRegistry.registerComponent('SwiftRadio', () => Router);