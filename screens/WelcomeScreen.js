import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
	{ text: 'Welcome to Polviks Core', color: '#03A9F4' },
	{ text: 'A Starter Boilerplate project based on React Native & Expo for rapid mobile app development. Swipe left to continue', color: '#009688' },
	{ text: 'Lets begin', color: '#fff' }
];

class WelcomeScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null	
	});

	state = { token: null }

	async componentWillMount() {
		let token = await AsyncStorage.getItem('fb_token');

		if (token) {
			this.props.navigation.navigate('Map');
			this.setState({ token });
		} else {
			this.setState({ token: false });
		}
	}

	onSlidesComplete = () => {
		this.props.navigation.navigate('Auth');
	}

	onRegisterPress = () => {
		this.props.navigation.navigate('Register');
	}

	render() {
		if (_.isNull(this.state.token)) {
			return <AppLoading />
		}

		return (
			<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} onRegister={this.onRegisterPress} />
		);
	}
}

export default WelcomeScreen;
