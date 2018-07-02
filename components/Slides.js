import React, { Component } from 'react';
import { 
	View, 
	Text, 
	ScrollView,
	Dimensions,
	Image,
	Alert
} from 'react-native';

import { 
	Icon, 
	Button,
	FormLabel,
	FormInput,
	FormValidationMessage 
} from 'react-native-elements';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { TextButton } from './TextButton';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

	renderLastSlide(index) {
		if (index === this.props.data.length - 1) {
			return (
				<View>
				    <Button 
				    	raised
				    	title='Start'
				    	style={[styles.buttonStyle, {marginBottom: 20}]}
				    	buttonStyle={{ borderRadius: 5, backgroundColor: '#3f6184' }}
				    	onPress={this.props.onLogin}
				    />
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
					<Image style={{marginBottom: 20}} source={require('../assets/icons/4klogo-76.png')} />
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
		color: 'white',
		marginBottom: 20,
		textAlign: 'center'
	},
	buttonStyle: {
		backgroundColor: '#3F6184',
		marginTop: 5,
		width: 300,
		borderRadius: 5

	},
};

function mapStateToProps({ auth }) {
	return { token: auth.token, error: auth.error };
}

export default connect(mapStateToProps, actions)(Slides);