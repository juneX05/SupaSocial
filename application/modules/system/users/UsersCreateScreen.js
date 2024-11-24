import {StyleSheet,Text } from "react-native";
import React from "react";
import {useApp} from "../../../contexts/ApplicationContext";
import ScreenWrapper from "../../../components/ScreenWrapper";
import DrawerLayoutComponent from "../../../components/DrawerLayoutComponent";

const UsersCreateScreen = () => {
    const {onLogout} = useApp()


    return (
        <DrawerLayoutComponent title={'Users:Create'}>
            <Text>Users Create Screen</Text>
        </DrawerLayoutComponent>
    )
}

export default UsersCreateScreen

const styles = StyleSheet.create({

})