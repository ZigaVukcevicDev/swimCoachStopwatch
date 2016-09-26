import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, View, NavigatorIOS, TouchableHighlight } from 'react-native';

export default class AboutUs extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    About us text goes here
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
