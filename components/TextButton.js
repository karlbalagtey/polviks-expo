import { TouchableOpacity, Text } from 'react-native';
import React, { Component } from 'react';

const TextButton = (props) => {
	return (
		<TouchableOpacity>
			<Text style={styles.textButton} onPress={props.onPress}>{props.value}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textButton: {
		color: 'gray',
		textDecorationLine: 'underline',
		textDecorationStyle: 'solid',
		textDecorationColor: 'gray'
	}
};

export { TextButton };