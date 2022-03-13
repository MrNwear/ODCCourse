import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import MaterialTabs from 'react-native-material-tabs';

export class Tab extends Component {
    state = {
        selectedTab: 0,
    };

    setTab(tab) {
        this.setState({ selectedTab: tab });
    }

    render() {
        const [selectedTab, setSelectedTab] = useState(0);

        return (
            <SafeAreaView style={styles.container}>
                <MaterialTabs
                    items={['One', 'Two', 'Three', 'Four', 'Five']}
                    selectedIndex={selectedTab}
                    onChange={setSelectedTab}
                    scrollable={true}
                    barColor="#1fbcd2"
                    indicatorColor="#fffe94"
                    activeTextColor="white"
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
