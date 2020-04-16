import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Containers as sContainers } from "./assets/styles";
import Header from "./src/components/Header";

function Screen2(props) {
  const { navigate } =  props.navigation;
  return (
    <View>
      <Text>{ props.navigation.getParam('name') }</Text>
      <Button title="Screen1" onPress={() => navigate('Main')}/>
    </View>
  );
}

Screen2.navigationOptions = {
  title: 'Screen2'
}

class Screen1 extends Component {
  static navigationOptions = {
    title: 'Screen1'
  }

  constructor(props){
    super(props);
  }

  render(){
    const { navigate } =  props.navigation;

    return (
      <View>
        <Text>Screen 1</Text>
        <Button title="Screen2" onPress={() => navigate('Screen2', { name: 'Usuario' })}/>
      </View>
    );
  }
}

const Navigator = createStackNavigator({
  Main: { screen: Screen1 },
  Screen2: { screen: Screen2 },
  initialRouteName: 'Main' 
});

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

/*
  export default class App extends Component {
    render() {
      return (
        <ScrollView>
          <View style={{ width: 120, height: 120, backgroundColor: 'red' }}>
            <Text>Oi</Text>
          </View>
          <View style={{ width: 120, height: 500, backgroundColor: 'yellow' }}>
            <Text>Oi</Text>
          </View>
          <View style={{ width: 120, height: 500, backgroundColor: 'yellow' }}>
            <Text>Oi</Text>
          </View>
          <View style={{ width: 120, height: 500, backgroundColor: 'yellow' }}>
            <Text>Oi</Text>
          </View>
        </ScrollView>
      );
    }
  }
*/
/*
  export default class App extends Component {
    render() {
      return (
        <View style={ sContainers.Containers.mainContainer }>
          <Header />
          <View style={ sContainers.Containers.contentContainer }>
            <Text>Oi do content</Text>
          </View>
          <View style={ sContainers.Containers.footerContainer }>
            <Text>Oi do footer</Text>
          </View>
        </View>
      );
    }
  }
*/