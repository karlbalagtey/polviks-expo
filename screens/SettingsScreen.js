import React, { Component } from 'react';
import { 
	View, 
	Text,
	AsyncStorage
} from 'react-native';
import { Button } from 'react-native-elements';

class SettingScreen extends Component {

	toLogout = async () => {
		let token = await AsyncStorage.getItem('token');
		let access_token = await AsyncStorage.getItem('access_token');

		if (token) {
			await AsyncStorage.removeItem('token');
		}

		if (access_token) {
			await AsyncStorage.removeItem('access_token');
		}

		this.props.navigation.navigate('Welcome');
	}

	render() {
		return (
			<View>
			    <Button 
			    	raised
			    	title='Logout'
			    	style={[styles.buttonStyle, {marginBottom: 20}]}
			    	buttonStyle={{ borderRadius: 5, backgroundColor: '#fc5830' }}
			    	onPress={this.toLogout}
			    />
			</View>
		);
	}
}

const styles = {
	buttonStyle: {
		backgroundColor: '#fc5830',
		marginTop: 5,
		width: 300,
		borderRadius: 5
	}
}

export default SettingScreen;
