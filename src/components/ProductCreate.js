import React, { Component } from 'react';
import { 
	Text, 
	Picker
} from 'react-native';
import { connect } from 'react-redux';
import { productUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class ProductCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Enter Name"
						value={this.props.name}
						onChangeText={value => this.props.productUpdate({ prop: 'name', value })}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Description"
						placeholder="Short Description"
						value={this.props.description}
						onChangeText={value => this.props.productUpdate({ prop: 'description', value })}
					/>				
				</CardSection>

				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.pickerTextStyle}>Categories</Text>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={value => this.props.productUpdate({ prop: 'shift', value })} 
					>
						<Picker.Item label="Technology" value="Technology" />
						<Picker.Item label="Grocery" value="Grocery" />
						<Picker.Item label="Pet" value="Pet" />
						<Picker.Item label="Travel" value="Travel" />
						<Picker.Item label="Business" value="Business" />
						<Picker.Item label="Used" value="Used" />
					</Picker>
				</CardSection>

				<CardSection>
					<Button>
						Create
					</Button>				
				</CardSection>

			</Card>
		);
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = (state) => {
	const { name, description, shift } = state.productForm;

	return { name, description, shift };
};

export default connect(mapStateToProps, { 
	productUpdate 
})(ProductCreate);

