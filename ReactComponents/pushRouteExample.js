import React from 'react-native'
import codePush from "react-native-code-push"
import Icon from "react-native-vector-icons/Ionicons"
import Txt from './appText'
import FeaturesPage from './featuresPage'

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
} = React

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
        let Scene
        switch (route.name) {
          case 'featuresPage':
           Scene = <FeaturesPage dismissHandler={Routeable.popRoute}/>
           break
          case 'subPage':
            Scene = <Subpage/>
            break
          default:
            Scene = <FeaturesPage dismissHandler={Routeable.popRoute}/>
        }
        return <Screen nav={nav}>{Scene}</Screen>
    }

    render() {
        return(
            <Navigator
            initialRoute={ { name: "featuresPage", title: "Features", icon:'ios-book'} }
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
        <Text style={[styles.navBarText, {paddingLeft: 15, paddingTop: 5, paddingRight: 20}]}>
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

// Define a simple Subpage to render
class Subpage extends React.Component {

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
})

export default Router
