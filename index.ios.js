/**
 * SwimCoachStopwatch React Native App
 */

import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
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
                    text={'start'}
                    diameter={64}
                    backgroundColor={'green'}
                />
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
