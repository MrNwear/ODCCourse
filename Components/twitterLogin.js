import React from "react";
import { Image, View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
export class TwitterSignIn extends React.Component {
    state = {
        country: "Egypt",
        lastName: "Nwear"
    }
    changeCountry = () => {
        this.setState({ country: "Libya" });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../images/twitterLogo.png')} style={styles.imageStyle} />
                </View>
                <View style={styles.inputsContainer}>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'arial' }}>Join Twitter today.</Text>
                    <TextInput placeholder="Full name" style={styles.inputStyle} />
                    <TextInput placeholder="Email" style={styles.inputStyle} />
                    <TouchableOpacity onPress={this.changeCountry} style={{ backgroundColor: 'white', width: '40%', borderRadius: 25, height: 30, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: '#1F7FE5', fontSize: 18 }}>Continue</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 16 }}>Already have an account ? <Text onPress={_ => { alert('login aho ya 3saaaaaaam') }} style={{ fontWeight: 'bold' }}>Login</Text> </Text>
                    <Text>{this.state.country}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1F7FE5",
        flex: 1,

    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputsContainer: {
        flex: 1,
        alignItems: "center",

    },
    imageStyle: {
        width: 100,
        height: 100
    },
    inputStyle: {
        backgroundColor: 'white',
        color: 'grey',
        width: '80%',
        margin: 10,
        borderRadius: 25,
    }

});