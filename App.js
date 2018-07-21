import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    AsyncStorage 
} from 'react-native';
import { 
    createBottomTabNavigator, 
    createStackNavigator 
} from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

export default class App extends React.Component {
    render() {
        const MainNavigator = createBottomTabNavigator({
            AuthStack: {
                screen: createStackNavigator({
                    Welcome: WelcomeScreen,
                    Auth: AuthScreen,
                    Register: RegisterScreen,
                    Forgot: ForgotPasswordScreen,
                    Login: LoginScreen
                })
            },
            Main: {
                screen: createBottomTabNavigator({
                    Dashboard: DashboardScreen,
                    Map: MapScreen,
                    Deck: DeckScreen,
                    Review: {
                        screen: createStackNavigator({
                            Review: ReviewScreen,
                            Settings: SettingsScreen
                        })
                    }
                })
            }
        }, {
            navigationOptions: {
                tabBarVisible: false
            },
            lazy: true,
            initialRouteName: 'AuthStack'
        });

        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MainNavigator />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
