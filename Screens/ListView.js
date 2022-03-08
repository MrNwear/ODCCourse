import React from 'react';
import { Image, View, StyleSheet, ScrollView, Text } from 'react-native';
import { MainButton } from '../Components/button';

export class ListViewComponent extends React.Component {
    state = {
        persons: [
            {
                id: 0,
                name: 'nwear ahmed mohamed ',
                imgsrc: 'https://www.picng.com/upload/mario/png_mario_75809.png',
                message: "hello",
                buttonTitle: "Follow",
                messagesCounter: 0
            },
            {
                id: 1,
                name: 'Ahmed ',
                imgsrc: 'https://icon-library.com/images/avatar-icon/avatar-icon-14.jpg',
                buttonTitle: "Follow",
                messagesCounter: 32
            },
            {
                id: 2,
                name: 'Ahmed nwear',
                imgsrc: 'https://icon-library.com/images/avatar-icon/avatar-icon-10.jpg',
                buttonTitle: "Follow",
                messagesCounter: 2
            },
            {
                id: 3,
                name: 'Ahmed kaboh',
                imgsrc: 'https://icon-library.com/images/avatar-icon/avatar-icon-27.jpg',
                buttonTitle: "Follow",
                messagesCounter: 0
            },
            {
                id: 4,
                name: 'Ahmed saamy',
                imgsrc: 'https://icon-library.com/images/avatar-icon/avatar-icon-5.jpg',
                buttonTitle: "Follow",
                messagesCounter: 5
            },
            {
                id: 4,
                name: 'Ahmed saamy',
                imgsrc: 'https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg',
                buttonTitle: "Follow",
                messagesCounter: 5,
                message: 'hello There'
            },
            {
                id: 4,
                name: 'Ahmed saamy',
                imgsrc: 'https://icon-library.com/images/avatar-icon/avatar-icon-8.jpg',
                buttonTitle: "Follow",
                messagesCounter: 5,
                message: 'hello hello'
            },


        ]
    }

    MessageCounter() {
        counter = 0;
        for (let i = 0; i < this.state.persons.length; i++)
            counter += this.state.persons[i].messagesCounter
        return counter;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.HeaderContainer}>
                    <Text style={[styles.followButtonTextStyle, { flex: 1, fontSize: 20 }]}>WhatsApp</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/searchicon.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                        <Image source={require('../images/messageicon.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                        <Image source={require('../images/moreicon.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                    </View>
                </View>
                <View style={styles.Header2Container}>
                    <Text style={[styles.followButtonTextStyle, { flex: 1, textAlign: 'center' }]}>Status</Text>
                    <Text style={[styles.followButtonTextStyle, { flex: 1, textAlign: 'center', borderBottomWidth: 3, borderBottomColor: 'white' }]}>

                        Chat
                    </Text>
                    <Text style={[styles.followButtonTextStyle, { flex: 1, textAlign: 'center' }]}>calls</Text>
                </View>
                <ScrollView>
                    {this.state.persons.map((item, index) => (
                        <View style={styles.ListContainer}>

                            <Image style={styles.logo} resizeMode='contain' source={{ uri: item.imgsrc }} />
                            <View style={styles.textStyle}>
                                <Text style={{ fontWeight: '200', color: '#000' }}>{item.name}</Text>
                                <Text>{item.message}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                                <Text >yesterday</Text>

                                <Text style={{ backgroundColor: item.messagesCounter != '' ? 'green' : 'white', color: 'white', borderRadius: 10, width: 20, height: 20, textAlign: 'center' }}>{item.messagesCounter}</Text>
                            </View>

                        </View>
                    )
                    )
                    }
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    HeaderContainer: {
        backgroundColor: '#275c54',
        padding: 20,
        flexDirection: 'row',
    },
    Header2Container: {
        backgroundColor: '#275c54',
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ListContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        alignContent: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center'



    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 5,
    },
    followButtonStyle: {
        backgroundColor: "red",
        marginRight: 5,
        width: 90,

        marginTop: 10
    },
    textStyle: {
        flex: 1,
        color: '#000',
        flexDirection: 'column'
    },
    followButtonTextStyle: {
        color: 'white'
    }


})