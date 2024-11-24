import {StyleSheet, Text} from "react-native";
import React from "react";
import {useApp} from "../../contexts/ApplicationContext";
import DrawerLayoutComponent from "../../components/DrawerLayoutComponent";

const HomeScreen = (props) => {
    const {onLogout} = useApp()

    return (
        <DrawerLayoutComponent {...props} title={'Home'}>
            <Text>Home Screen</Text>
        </DrawerLayoutComponent>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})