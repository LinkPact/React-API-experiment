import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import CalendarScreen from './components/screens/CalendarScreen';
import HomeScreen from './components/screens/HomeScreen';
import CreateCalendarScreen from './components/screens/CreateCalendarScreen';
import {
	StackNavigator,
} from 'react-navigation';






/*
export default class APITest extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && 'pizza').join(' ')}
                </Text>

            <Button
                onPress={this.onPressLearnMore}
                title="Learn more"
                color="#005500"
                accessibilityLabel="Learn some more about this purple button"
                style={{padding:5}}
            />

            <Text></Text>

            <Button 
                onPress={this.sendAPIRequestClick}
                title="Send API request"
                color="#005500"
                accessibilityLabel="Send test API request"
                style={{padding:5}}
            />

            </View>
            
        );
    }

    onPressLearnMore(event) {
        console.log("Pressed!");
    }


    sendAPIRequestClick(event) {        
        var target_url = "http://192.168.1.103/app/users/"
        sendAPIRequest(target_url);
    }
}
*/

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: CalendarScreen },
  CreateCalendar: { screen: CreateCalendarScreen },
});
export default App;
