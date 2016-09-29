'use strict';
/**
 * Timer component
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            timerValue: 0
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                timerValue: this.state.timerValue + 1
            })

        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <Text>
                {this.state.timerValue}
            </Text>
        );
    }
}

export default Timer;
