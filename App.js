import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

export default class PizzaTranslator extends Component {
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
                onPress={this.sendAPIRequest}
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

    sendAPIRequest(event) {

        var target_url = "http://192.168.1.103:8000"

        console.log("Requesting URL: " + target_url);
        
        var output = fetch(target_url)
        .then(
            function(response) {
                return response.text();
            }, 
            function(error) {
                console.log("Problem with operation: " + error.message);
            }
        );

        console.log("Result: " + output.status);

        /*
        fetch("http://localhost:8000/app/users/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
            })
        })
        */
    }
}
