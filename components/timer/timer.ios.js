'use strict';
/**
 * Timer component
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Timer extends React.Component {

    static propTypes = {
        computation: React.PropTypes.oneOf(['addition', 'subtraction']).isRequired,
        valueStart: React.PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            valueCurrent: props.valueStart
        }
    }

    componentDidMount() {
        const stepValue = this.props.computation === 'addition' ? 1 : -1;

        this.timer = setInterval(() => {
            this.setState({
                valueCurrent: this.state.valueCurrent + stepValue
            })

        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <Text>
                {this.state.valueCurrent}
            </Text>
        );
    }
}

export default Timer;
