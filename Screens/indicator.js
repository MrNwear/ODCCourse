import React from 'react';
import { Image, View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, ActivityIndicator, Switch, Platform } from 'react-native';
import { BouncyCheckBox } from 'react-native-bouncy-checkbox';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
export class Indicator extends React.Component {

    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1 }}>

                <Switch trackColor={{ true: "#ff0000", false: "#666", }} thumbColor={isEnabled ? "#00ff00" : "#fff"} value={isEnabled} />
                {Platform.OS == 'ios' ? (<ActivityIndicator size={'large'} color="#000" />) : (<ActivityIndicator size={'large'} color={"red"} />)}
            </View>

        );
    }
}