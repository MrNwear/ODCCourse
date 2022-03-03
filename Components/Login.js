import React from 'react';
import { Image, View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { BouncyCheckBox } from 'react-native-bouncy-checkbox';
export class Login extends React.Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Image source={require('../images/logo.png')} style={styles.tinyLogo} />
                </View>
                <View style={styles.inputsContainerView}>
                    <TextInput placeholder='UserName' style={styles.userNameStyle} />
                    <TextInput placeholder='password' secureTextEntry={true} style={styles.passwordStyle} />


                    <TouchableOpacity style={styles.buttonStyles}>
                        <Text style={styles.textStyles}>Log In</Text>
                    </TouchableOpacity >
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </View>
                <View style={styles.signUpStyle}>
                    <Text style={styles.signupTextStyles}>SignUp FaceBook</Text>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c5998',
        alignItems: 'center',
        width: '100%',

    },
    inputsContainerView: {
        width: "100%",
        flex: 1, alignItems: 'center'
    },
    userNameStyle: {
        height: 50,
        borderRadius: 10,
        width: '80%',
        color: '#000000',
        borderWidth: 1,
        backgroundColor: '#fff',

    },
    passwordStyle: {
        height: 50,
        borderRadius: 10,
        margin: 10,
        width: "80%",
        borderWidth: 1,
        backgroundColor: '#fff',

    },
    buttonStyles: {
        width: 280,
        height: 50,
        backgroundColor: '#6868ff',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
    },
    textStyles: {
        fontSize: 20,
        color: 'white',
    },
    tinyLogo: {
        width: 200,
        height: 50,

    },
    forgotPassword: {
        fontSize: 20,
        color: 'white',
        textDecorationLine: 'underline'
    },
    signupTextStyles: {
        fontSize: 20,
        color: 'white',
        padding: 14,
        textDecorationLine: 'underline',

    },
    signUpStyle: {
        flex: 1,
        flexDirection: 'column-reverse',

    }
});