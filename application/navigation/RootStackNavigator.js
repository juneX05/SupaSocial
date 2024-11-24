import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../modules/core/LoginScreen";
import RootDrawerNavigator from "./RootDrawerNavigator";
import LoaderComponent from "../components/LoaderComponent";

const { Navigator, Screen } = createStackNavigator();

const RootStackNavigator = () => {
    return (
        <Navigator screenOptions={{headerShown: false}} id='RootStackNavigator'>
            <Screen name='Loader' component={LoaderComponent}/>
            <Screen name='Login' component={LoginScreen}/>
            <Screen name='Drawer' component={RootDrawerNavigator}/>
        </Navigator>
    );
}

export default RootStackNavigator