'use strict';
/**
 * Button component
 */

import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import stylesRaw from './stylesRaw.js';
import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';

class Button extends React.Component {

    static propTypes = {
        text: React.PropTypes.string.isRequired,
        diameter: React.PropTypes.number.isRequired, // Value passed in pixels.
        backgroundColor: React.PropTypes.string.isRequired
    };

    componentWillMount() {
        this.styles = StyleSheet.create(this.setAdditionalStyles());
    }

    setAdditionalStyles() {
        const props = this.props;

        const additionalStyles = {
            circle: {
                backgroundColor: props.backgroundColor,
                width: props.diameter,
                height: props.diameter,
                borderRadius: props.diameter / 2
            }
        };

        return merge(cloneDeep(stylesRaw), additionalStyles);
    }

    onPressButton() {
        console.log('I was pressed.');
    }

    render() {
        const props = this.props;

        return (
            <TouchableHighlight
                style={ this.styles.circle }
                onPress={this.onPressButton}
            >
                <Text>
                    {props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}

export default Button;
