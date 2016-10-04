'use strict';
/**
 * Button component
 */

import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import stylesRaw from './stylesRaw.js';

class Button extends React.Component {

    static propTypes = {
        text: React.PropTypes.string.isRequired,
        diameter: React.PropTypes.number.isRequired, // Value passed in pixels.
        backgroundColor: React.PropTypes.string.isRequired
    };

    componentWillMount() {
        this.setAdditionalStyles();
        this.styles = StyleSheet.create(stylesRaw);
    }

    setAdditionalStyles() {
        const props = this.props;

        // TODO: rather use append (or similar) for shorter syntax
        stylesRaw.circle.backgroundColor = props.backgroundColor;
        stylesRaw.circle.width = props.diameter;
        stylesRaw.circle.height = props.diameter;
        stylesRaw.circle.borderRadius = props.diameter / 2;
    }

    onPressButton() {
        console.log('I was pressed');
    }

    render() {
        const props = this.props;

        return (
            <TouchableHighlight
                style={ this.styles.circle }
                onPress={this.onPressButton}
            >
                <Text>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}

export default Button;
