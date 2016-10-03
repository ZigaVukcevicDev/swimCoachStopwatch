/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import AboutUs from './screens/aboutUs/aboutUs.ios.js'
import Timer from './components/timer/timer.ios.js';
import Button from './components/button/button.ios.js';

class SwimCoachStopwatch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Timer
                    computation={'addition'}
                    valueStart={0}
                    refreshTime={1000}
                />
                <Timer
                    computation={'subtraction'}
                    valueStart={10}
                    refreshTime={50}
                />
                <Timer
                    computation={'subtraction'}
                    valueStart={10}
                    isFloat={true}
                    refreshTime={200}
                />
                <Button
                    text="I will be a button in the near future!"
                    diameter={20}
                />
                {/*
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                <AboutUs />
                 */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingRight: 100,
        // justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('swimCoachStopwatch', () => SwimCoachStopwatch);
