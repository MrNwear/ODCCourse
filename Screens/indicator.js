import React from 'react';
import { Image, View, Button, StyleSheet, TouchableOpacity, Text, ScrollView, ActivityIndicator, Switch, Platform } from 'react-native';
import { BouncyCheckBox } from 'react-native-bouncy-checkbox';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
export class Indicator extends React.Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Button title='fetch Data' onPress={() => { this.props.navigation.navigate("Fetch") }} />
            </View>

        );
    }
}