import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';



function sendAPIRequest(target_url) {

    console.log("Requesting URL: " + target_url);
        
    fetch(target_url, {
        method: "GET",
        heads: {
            "Content-Type": "application/json"
        },
        credentials: "jakob:djangodjango"
    })
    .then(
        function(response) {
            console.log("Returning: " + response.json());
            return response;
        }, 
        function(error) {
            console.log("Problem with operation: " + error.message);
        }
    );
}


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
