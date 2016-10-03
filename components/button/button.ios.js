'use strict';
/**
 * Button component
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Button extends React.Component {

    static propTypes = {
        text: React.PropTypes.string.isRequired,
        diameter: React.PropTypes.number.isRequired // Value passed in pixels.
    };

    render() {
        return (
            // TODO: use TouchableHighlight component
            <Text>
                {this.props.text}
            </Text>
        );
    }
}

export default Button;
