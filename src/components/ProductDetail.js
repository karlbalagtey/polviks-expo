import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Lightbox from 'react-native-lightbox';

import { Card, CardSection, Button } from './common';

const ProductDetail = ({ product }) => {
	const { title, details, images } = product;
	const { 
		thumbnailStyle, 
		headerContentStyle,
		headerTextStyle,
		imageStyle,
		thumbnailContainerStyle
	} = styles;

	let thumbnailImage;
	let primaryImage;

	if (typeof images[0] !== 'undefined') {
		thumbnailImage = images[0].thumbnail_url;
		primaryImage = images[0].mobile_url;
	} else {
		thumbnailImage = 'http://lorempixel.com/60/60/nature';
		primaryImage = 'http://lorempixel.com/320/320/nature';
	}

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
						style={thumbnailStyle} 
						source={{ uri: thumbnailImage }} 
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text style={{ flex: 1, flexWrap: 'wrap' }}>{details}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image 
					style={imageStyle}
					source={{ uri: primaryImage }} 
				/>
			</CardSection>

			<CardSection>
				<Button whenPress={() => console.log(title)}>
					Buy
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default ProductDetail;
