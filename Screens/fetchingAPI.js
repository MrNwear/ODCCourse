import React from 'react';
import { Text, Button, StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';

export class FetchAPIScreen extends React.Component {
    state = {
        data: [],
        loaded: true
    }
    getUsers = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        'name': "Nwear",
                        "job": 'Leader'
                    }
                )
            }
            );

            const json = await response.json();

            this.setState({ data: json });
        } catch (error) {
            console.error(error);
        }
    }
    tryAPI = () => {

        axios.get('https://reactnative.dev/movies.json')
            .then(function (response) {
                alert(response.data.title);
            })
            .catch(function (error) {
                alert(error);
            });

    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.username}, {item.name}</Text>)}
                />
            </View>
        );
    }
    componentDidMount() {
        this.getUsers();
        this.tryAPI();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

    }
})