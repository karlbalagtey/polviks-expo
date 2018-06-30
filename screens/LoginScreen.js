import React, { Component } from 'react';
import { 
	View, 
	Text, 
	AsyncStorage,
	Image 
} from 'react-native';
import { AppLoading } from 'expo';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginScreen extends Component {
	state = { 
		username: '',
		password: '',
	};

	componentDidMount() {
		const url = 'https://core.polviks.com/oauth/token',
			  clientId = 2,
			  clientSecret = 'it9JnVWEwfYqHBGOkixncH3OKyyPzbx3FHsqKef3',
			  grantType = 'password',
			  providers = 'customers';

		axios.post(url, {
			client_id: clientId,
			client_secret: clientSecret,
			grant_type: grantType,
			providers: providers,
			username: this.state.username,
			password: this.state.password,
		})
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});

		this.onAuthComplete(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.onAuthComplete(nextProps);
	}

	onAuthComplete(props) {
		if (props.token) {
			this.props.navigation.navigate('Map');
		}
	}

	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Image 
					style={{marginBottom: 50}}
					source={require('../assets/icon.png')} 
				/>
			</View>
		);
	}
}

function mapStateToProps({ auth }) {
	return { token: auth.token };
}

export default connect(mapStateToProps, actions)(LoginScreen);
