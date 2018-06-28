import React, { Component } from 'react';
import { 
	View, 
	Text, 
	ScrollView,
	Dimensions 
} from 'react-native';

import { 
	Icon, 
	Button,
	FormLabel,
	FormInput,
	FormValidationMessage 
} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

	renderLastSlide(index) {
		if (index === this.props.data.length - 1) {
			return (
				<View style={styles.formStyle}>
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
				    	style={[styles.buttonStyle, { marginBottom: 50 }]}
				    	buttonStyle={{ borderRadius: 5 }}
				    />
				    <Text>Log in with</Text>
				    <View style={{flexDirection: 'row'}}>
						<Icon
							raised
							name='facebook'
							type='font-awesome'
							onPress={this.props.onComplete}
						/>
						<Icon
							raised
							name='instagram'
							type='font-awesome'
							onPress={this.props.onComplete}
						/>
						<Icon
							raised
							name='google'
							type='font-awesome'
							onPress={this.props.onComplete}
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
		backgroundColor: '#0288D1',
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
		backgroundColor: 'white', 
		padding: 10, 
		width: 300, 
		borderRadius: 5,
		margin: 5
	}
};

export default Slides;