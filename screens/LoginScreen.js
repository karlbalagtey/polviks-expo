import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Alert
} from 'react-native';

import {
	FormInput,
	Button,
	Icon
} from 'react-native-elements';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { TextButton } from '../components/TextButton';

class LoginScreen extends Component {
	state = {
		username: '',
		password: '',
	};

	onLogin = () => {
		this.props.polviksLogin(this.state);
		this.onAuthComplete(this.props);
	}

	onRegisterPress = () => {
		this.props.navigation.navigate('Register');
	}

	onResetPassword = () => {
		this.props.navigation.navigate('Forgot');
	}

	componentWillReceiveProps(nextProps) {
		this.onAuthComplete(nextProps);
	}

	onAuthComplete(props) {
		if (props.token) {
			this.props.navigation.navigate('Map');
		}

		if (props.error) {
			return (
			    Alert.alert(
			      'Error',
			      props.error,
			      [
			        {text: 'OK', onPress: () => this.props.resetError()},
			      ],
			      { cancelable: false }
			    )
			);
		}
	}

	render() {
		return (
			<View>
				<View style={[styles.formStyle, {marginBottom: 30}]}>
					<Image style={{marginBottom: 50}} source={require('../assets/icons/4klogo-76-2x.png')} />
					<FormInput 
						inputStyle={styles.formInputStyle} 
						placeholder="Username" 
						containerStyle={{ borderBottomWidth: 0 }}
						onChangeText={(username) => this.setState({username})}
						value={this.state.username}
						required
					/>
				    <FormInput 
				    	secureTextEntry
				    	inputStyle={styles.formInputStyle} 
				    	placeholder="Password"
						containerStyle={{ borderBottomWidth: 0 }} 
						onChangeText={(password) => this.setState({password})}
						value={this.state.password}
				    />
				    <Button 
				    	raised
				    	title='Log in'
				    	style={[styles.buttonStyle, {marginBottom: 20}]}
				    	buttonStyle={{ borderRadius: 5, backgroundColor: '#3f6184' }}
				    	onPress={this.onLogin}
				    />
				    <TextButton 
						style={{
							color: 'black', 
							height: 100
						}} 
						onPress={this.onResetPassword} 
						value={'Forgot password?'} 
					/>
				</View>
				<View style={{
					alignItems: 'center', 
					justifyContent: 'space-around',
					marginBottom: 50
				}}>
				    <Text>Log in with</Text>
					<Icon
						raised
						name='facebook'
						color='white'
						containerStyle={{backgroundColor: '#3B5998'}}
						type='font-awesome'
						onPress={this.props.onComplete}
					/>
				</View>
				<View style={{
					alignItems: 'center', 
					justifyContent: 'space-around'
				}}>
					<TextButton 
						style={{
							color: 'black', 
							height: 100
						}} 
						onPress={this.onRegisterPress} 
						value={'Register'} 
					/>
				</View>
			</View>
		);
	}
}

const styles = {
	buttonStyle: {
		backgroundColor: '#3F6184',
		marginTop: 5,
		width: 300,
		borderRadius: 5

	},
	formStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10
	},
	formInputStyle: {
		backgroundColor: '#f5f5f5', 
		padding: 10, 
		width: 300, 
		borderRadius: 5,
		margin: 5
	}
};

function mapStateToProps({ auth }) {
	return { token: auth.token, error: auth.error };
}

export default connect(mapStateToProps, actions)(LoginScreen);