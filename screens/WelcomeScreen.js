import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
	{ text: 'Welcome to Polviks Core', color: '#03A9F4' },
	{ text: 'A Starter Boilerplate project based on React Native & Expo for rapid mobile app development. Swipe left to continue', color: '#009688' },
	{ text: 'Begin your Polviks journey', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null	
	});

	state = { token: null, access_token: null }

	async componentWillMount() {
		let token = await AsyncStorage.getItem('fb_token');
		let access_token = await AsyncStorage.getItem('access_token');

		if (token) {
			this.props.navigation.navigate('Dashboard');
			this.setState({ token });
		} else if(access_token) {
			this.props.navigation.navigate('Dashboard');
			this.setState({ access_token });
		} else {
			this.setState({ token: false });
		}
	}

	onSlidesComplete = () => {
		this.props.navigation.navigate('Auth');
	}

	onLoggingIn = () => {
		this.props.navigation.navigate('Login');
	}

	render() {
		if (_.isNull(this.state.token) || _.isNull(this.state.access_token)) {
			return <AppLoading />
		}

		return (
			<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} onLogin={this.onLoggingIn}/>
		);
	}
}

export default WelcomeScreen;
