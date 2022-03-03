import React from 'react';
import { View, Image } from 'react-native';
class Splash extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./images/logo.png')} style={styles.imageStyle} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c5998',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: '80%',
        height: 100,
    },
});