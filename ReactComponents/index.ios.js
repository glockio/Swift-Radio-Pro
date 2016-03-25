'use strict';
import React from 'react-native';
import codePush from "react-native-code-push";

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    NativeModules,
    Navigator,
    InteractionManager
} = React;

// import { NativeModules } from 'react-native';
const CalendarManager = NativeModules.CalendarManager
const Routeable = NativeModules.Routeable

// NavBar
class NavBar extends React.Component {
    render() {
        return(
            <View>
                <Text> I am the header</Text>
            </View>
        )
    }
}

// Define Router
class Router extends React.Component {

    renderScene(route, nav) {
        switch (route.name) {
          case 'aboutPage':
            return <SwiftRadio nav={nav}/>;
          case 'testPage':
            return <TestPage nav={nav}/> ;
          default:
            return <SwiftRadio nav={nav}/>;
        }
    }

    render() {
        return(
            <Navigator
                initialRoute={ { name: "aboutPage", title: "About Page"} }
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
                    return Navigator.SceneConfigs.FloatFromRight;
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
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    )
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
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
                <Text>Test Page here!!</Text>
                <TouchableOpacity onPress={ () => this._goBack() }>
                    <View style={styles.button}>
                        <Txt>Go Back</Txt>
                    </View>
                </TouchableOpacity>
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
        this.props.nav.push({name: "testPage"})
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={{uri: 'logo'}} style={{width: 126, height: 49}}/>
                    <Text style={styles.text}>Xcode 7/Swift 2 CHANGED!!!</Text>
                    <Text style={styles.text}> Radio App</Text>
                </View>

                <View style={styles.featureList}>
                    <Txt>
                        FEATURES: + Displays Artist, Track and Album/Station Art on lock screen.
                        + Background Audio performance
                        +Last FM API integration to automatically download album art
                        + Loads and parses Icecast metadata (i.e. artist & track names)
                        + Ability to update stations from server without resubmitting to the app store.
                    </Txt>
                </View>

                <TouchableOpacity onPress={ () => this._popRoute() }>
                    <View style={styles.button}>
                        <Txt>Work Work Work Work</Txt>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => this._subPage() }>
                    <View style={styles.button}>
                        <Txt>Sub Page</Txt>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


class Txt extends React.Component {
  render() {
    return <Text style={textStyles.text}> {this.props.children} </Text>
  }

}

const textStyles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'blue'
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'transparent',
        paddingTop: 75,
    },
    text: {
        fontSize: 18,
        color: 'green'
    },
    featureList: {

    },
    button: {
        backgroundColor: 'red',
        flex: 1,
        padding: 10,
    },
    navBar: {
        // padding: 30,
        "height": 64,
        // "padding": 100,
        // borderBottomColor: 'green',
        // borderBottomWidth: 2,
        // backgroundColor:'blue',
        // "marginTop": 20,
        backgroundColor: 'rgb(44,44,49)',
    },
    navBarText: {
        color: 'white',
    }
});

AppRegistry.registerComponent('SwiftRadio', () => Router);