import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Containers as sContainers } from "../../../assets/styles";

export default class Header extends Component {
    render() {
        return (
            <View style={ sContainers.Containers.headerContainer }>
                <Text>Oi do header</Text>
            </View>
        );
    }
}