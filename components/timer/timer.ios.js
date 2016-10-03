'use strict';
/**
 * Timer component
 */

import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';

class Timer extends React.Component {

    static propTypes = {
        computation: React.PropTypes.oneOf(['addition', 'subtraction']).isRequired,
        valueStart: React.PropTypes.number.isRequired, // Value passed in seconds.
        refreshTime: React.PropTypes.number.isRequired // Value passed in milliseconds.
    };

    constructor(props) {
        super(props);

        const time = this.convertMillisecondsToTimeFormat(props.valueStart * 60 * 60);

        this.state = {
            valueCurrentRaw: props.valueStart * 60 * 60,
            valueCurrentFormatted: time.minutes
        }
    }

    convertMillisecondsToTimeFormat(milliseconds) {
        return {
            minutes:      Math.floor(milliseconds / 60 * 60 * 60),
            seconds:      Math.floor(milliseconds / 60 * 60),
            milliseconds: Math.floor(milliseconds / 60)
        }
    }

    componentDidMount() {
        console.log('woot');

        // 0
        // 0:00:05

        const
            props = this.props,
            state = this.state;
        // const frequency = 1000 / props.refreshTime;

        // const startValue = props.startValue * 3600 + props.refreshTime;
        // const valueStep = this.props.computation === 'addition' ? 1000 / props.refreshTime : -1;

        const time = this.convertMillisecondsToTimeFormat(
            state.valueCurrentRaw + props.refreshTime
        );

        this.timer = setInterval(() => {
            this.setState({
                valueCurrentRaw: state.valueCurrentRaw + props.refreshTime,
                valueCurrentFormatted: time.minutes
            })
        }, props.refreshTime);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <Text>
                {this.state.valueCurrentRaw}
            </Text>
        );
    }
}

export default Timer;
