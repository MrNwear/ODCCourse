import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { MainButton } from '../Components/button'
export class Test extends React.Component {
    state = {
        counter: 0
    }
    incrementHandler = () => { this.setState({ counter: this.state.counter + 1 }) }
    render() {
        return (<View style={styles.container}>
            <MainButton title="Increment" onpress={this.incrementHandler} />
            <Text>{this.state.counter}</Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});