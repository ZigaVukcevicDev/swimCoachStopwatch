import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

export default class AboutUs extends Component {
    // TODO: if possible make link and email as real link

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.appName}>Swim Coach Stopwatch</Text>
                <Text style={styles.version}>Version: 0.1</Text>

                <Text style={styles.title}>Concept</Text>
                <Text style={styles.authors}>Žiga Vukčevič, Tina Jeromen</Text>

                <Text style={styles.title}>Design</Text>
                <Text style={styles.authors}>Lovro Podobnik</Text>

                <Text style={styles.title}>Development</Text>
                <Text style={styles.authors}>Žiga Vukčevič - http://www.be-codified.com</Text>

                <Text style={styles.reportBugs}>
                    Found any bugs? Please send an email with full description to ziga@be-codified.com
                </Text>
            </View>
        );
    }
}
