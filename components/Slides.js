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

import { TextButton } from './TextButton';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

	renderLastSlide(index) {

		if (index === this.props.data.length - 1) {
			return (
				<View>
					<View style={[styles.formStyle, {marginBottom: 30}]}>
						<Image style={{marginBottom: 50}}source={require('../assets/icon.png')} />
						<FormInput 
							inputStyle={styles.formInputStyle} 
							placeholder="Username" 
							containerStyle={{ borderBottomWidth: 0 }}
						/>
					    <FormInput 
					    	inputStyle={styles.formInputStyle} 
					    	placeholder="Password"
							containerStyle={{ borderBottomWidth: 0 }} 
					    />
					    <Button 
					    	raised
					    	title='Log in'
					    	style={[styles.buttonStyle, {marginBottom: 20}]}
					    	buttonStyle={{ borderRadius: 5, backgroundColor: '#3f6184' }}
					    	onPress={this.props.onButtonComplete}
					    />
					    <TextButton 
							style={{
								color: 'black', 
								height: 100
							}} 
							onPress={this.props.onRegister} 
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
							onPress={this.props.onRegister} 
							value={'Register'} 
						/>
					</View>
				</View>
			);
		}
	}

	renderSlides() {
		return this.props.data.map((slide, index) => {
			return (
				<View 
					key={slide.text} 
					style={[styles.slideStyle, { backgroundColor: slide.color }]}
				>
					<Text style={styles.textStyle}>{slide.text}</Text>
					{this.renderLastSlide(index)}
				</View>
			);
		});
	}

	render() {
		return (
			<ScrollView 
				horizontal
				pagingEnabled
				style={{ flex: 1 }}
			>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

const styles = {
	slideStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH,
		padding: 10
	},
	textStyle: {
		fontSize: 30,
		color: 'white'
	},
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

export default Slides;