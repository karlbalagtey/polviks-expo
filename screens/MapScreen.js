import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
	state = {
		region: {
			longitude: -122,
			latitude: 37,
			longitudeDelta: 0.04,
			latitudeDelta: 0.09
		}
	}

	onRegionChangeComplete = (region) => {
		console.log(region);
		this.setState({ region });
		// AsyncStorage.removeItem('fb_token');
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<MapView 
					region={this.state.region}
					style={{ flex: 1 }}
					onRegionChangeComplete={this.onRegionChangeComplete}
				/>
			</View>
		);
	}
}

export default MapScreen;
