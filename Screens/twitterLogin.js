import React from "react";
import { Image, View, TextInput, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MainButton } from "../Components/button";
export class TwitterSignIn extends React.Component {
    state = {
        country: "Egypt",
        lastName: "Nwear"
    }
    changeCountry = () => {
        if (this.name === "") {
            alert("fill the name field");
        }
        else if (this.password === "") {
            alert("fill the password field");
        }
        else if (this.name.toLowerCase().trim() === "nwear") {
            if (this.password != "root") {
                alert("wrong password");
            }
            alert("login successful");
        }
        else {
            alert("wrong UserName");
        }
    }
    handleName = (text) => {
        this.name = text;


    }
    name = "";
    password = "";
    handlePassword = (text) => {
        this.password = text
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../images/twitterLogo.png')} style={styles.imageStyle} />
                </View>
                <View style={styles.inputsContainer}>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'arial' }}>Join Twitter today.</Text>
                    <TextInput onChangeText={this.handleName} placeholder="Full name" style={styles.inputStyle} />
                    <TextInput onChangeText={this.handlePassword} placeholder="Email" style={styles.inputStyle} />
                    <MainButton title="essam" style={{ backgroundColor: "green" }} />
                    <MainButton title="ibrahim" style={{ backgroundColor: "red" }} />
                    <MainButton title="Ahmed" style={{ backgroundColor: "blue" }} />
                    <MainButton title="Nwear" style={{ backgroundColor: "black" }} />
                    <Text style={{ color: 'white', fontSize: 16 }}>Already have an account ? <Text onPress={_ => { alert('login aho ya 3saaaaaaam') }} style={{ fontWeight: 'bold' }}>Login</Text> </Text>
                    <Text>{this.state.country}</Text>
                    <Button title="3saaaaaan" />
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