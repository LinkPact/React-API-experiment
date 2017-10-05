import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

export default class RealmTestScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to Test Screen',
    };
    render() {
        return (
            <View style={{flex: 1}}>
                <Button
                    title="Add habit entry (for current user)"
                    color="#005500"
                    onPress={() => console.log("TODO: Implement")}
                />
                <Button
                    title="Show habit entries (for current user)"
                    color="#005500"
                    onPress={() => console.log("TODO: Implement")}
                />
                <Button
                    title="Login as user 1"
                    color="#000055"
                    onPress={() => console.log("TODO: Implement")}
                />
                <Button
                    title="Login as user 2"
                    color="#000055"
                    onPress={() => console.log("TODO: Implement")}
                />
                <Button
                    title="Login as user 3"
                    color="#000055"
                    onPress={() => console.log("TODO: Implement")}
                />
                <Button
                    title="Clear all databases"
                    color="#550000"
                    onPress={() => console.log("TODO: Implement")}
                />
            </View>
        );
    }
}
