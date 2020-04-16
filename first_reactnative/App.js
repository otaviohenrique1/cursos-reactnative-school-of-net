import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

function Component1(props) {
  return (
    <View style={styles.container}>
      <Text>{ props.name }</Text>
      <Text>{ props.num1 + props.num2 }</Text>
    </View>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Usuario',
      text: ''
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  onChange = (e) => {
    this.setState({ text: e });
  }

  onPress = (e) => {
    alert(`Clicked: ${this.state.text}`);
  }

  render() {
    const { name } = this.state;
    return (
      <View style={styles.container}>
        {/* <Text>Hello world {name}</Text> */}
        <TextInput placeholder="My placeholder" onChangeText={this.onChange}/>
        {/* <Button
          onPress={this.onPress}
          title="Press"
        /> */}
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.button}
        >
          <Text style={[styles.buttonText, styles.button]}>Press</Text>
        </TouchableHighlight>
        {/* <Component1 num1={4} num2={5} name={name}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingTop: 10,
    paddingBottom: 10,
    marginRight:30,
    marginLeft: 30,
    marginTop: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  }
});
