import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductCreate from './components/ProductCreate';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Polviks" initial />
				</Scene>
				<Scene key="main">
					<Scene 
						onRight={() => Actions.productCreate()}
						rightTitle="Add"
						key="productList" 
						component={ProductList} 
						title="Products" 
						initial
					/>
					<Scene key="productCreate" component={ProductCreate} title="Post Item" />
					<Scene key="productDetail" component={ProductDetail} title="Product" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
