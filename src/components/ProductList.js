import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ProductDetail from './ProductDetail';

class ProductList extends Component {
    state = { products: [] };       

    componentWillMount() {
        axios.get('https://core.polviks.com/api/products')
            .then(response => this.setState({ products: response.data }));
    }

    renderProducts() {
        const products = this.state.products.data;
        const meta = this.state.products.meta;

        if (products) {
            return products.map(product => 
                <ProductDetail key={product.identifier} product={product} pagination={meta} />
            );
        }
    }

    render() {
        return (
            <ScrollView>
                {this.renderProducts()}
            </ScrollView>
        );
    }
}

export default ProductList;
