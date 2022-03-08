import React from 'react';
import { Image, View, StyleSheet, ImageBackground } from 'react-native';

export class D3Splash extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imageContainer} source={require('../images/bg.png')}>
                    <Image source={require('../images/logo 2.png')} />
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    logo: {
        width: '20%',
        height: '20%'
    }
})