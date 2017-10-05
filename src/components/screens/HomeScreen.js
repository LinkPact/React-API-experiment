import React from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { initRealmTest } from '../../api/RealmTest';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		const { navigate } = this.props.navigation;
		// const { debug } = this.printDebugMessage.bind(this);
		return (
    		<View style={{flex: 1}}>
    			<Text>Random stuff!!</Text>
    			<Text>Login screen</Text>
	     		<Button
		        	title="Join a Calendar"
		        	onPress={() =>
		          		navigate('Calendar')
		        	}
	      		/>
	      		<Button
		        	title="Create a Calendar"
		        	onPress={() =>
		          		navigate('CreateCalendar')
		        	}
	      		/>
				<Button
					onPress={initRealmTest}
					title="Realm test"
					color="#005500"
					accessibilityLabel="Realm test"
					style={{padding:5}}
				/>
				<Button
					title="Realm Test Screen"
					color="#005500"
					onPress={() => navigate('RealmTestScreen')}
					accessibilityLabel="Realm Test Screen"
				/>
      		</View>
    	);
  	}
}
