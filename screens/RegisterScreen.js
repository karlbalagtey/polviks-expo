import React, { Component } from 'react';
import { 
	View, 
	Text, 
	ScrollView,
	Dimensions,
	Image
} from 'react-native';

import { 
	Icon, 
	Button,
	FormLabel,
	FormInput,
	FormValidationMessage 
} from 'react-native-elements';

class RegisterScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Create an account'	
	});

	render() {
		return (
			<View>
				<View style={styles.formStyle}>
					<Image 
						style={{marginBottom: 50}}
						source={require('../assets/icon.png')} 
					/>
					<FormInput 
						inputStyle={styles.formInputStyle} 
						placeholder="Username" 
						containerStyle={{ borderBottomWidth: 0 }}
					/>
					<FormInput 
						inputStyle={styles.formInputStyle} 
						placeholder="Email" 
						containerStyle={{ borderBottomWidth: 0 }}
					/>
				    <FormInput 
				    	inputStyle={styles.formInputStyle} 
				    	placeholder="Password"
						containerStyle={{ borderBottomWidth: 0 }} 
				    />
				    <Button 
				    	raised
				    	title='Register'
				    	style={[
				    		styles.buttonStyle, 
				    		{ marginBottom: 50 }
				    	]}
				    	buttonStyle={{ 
				    		borderRadius: 5, 
				    		backgroundColor: '#3f6184' 
				    	}}
				    	onPress={this.props.onButtonComplete}
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

export default RegisterScreen;