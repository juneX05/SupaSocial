import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import UsersListScreen from "./UsersListScreen";
import UsersCreateScreen from "./UsersCreateScreen";

const { Navigator, Screen } = createStackNavigator();

const UsersStackNavigator = () => {
    return (
        <Navigator screenOptions={{headerShown: false, animation:"slide_from_right"}} id='UsersStackNavigator'>
            <Screen name='Users' component={UsersListScreen}/>
            <Screen name='UsersCreate' component={UsersCreateScreen}/>
        </Navigator>
    );
}

export default UsersStackNavigator
