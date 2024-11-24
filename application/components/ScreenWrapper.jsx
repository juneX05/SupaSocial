import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {Appearance, View} from "react-native";
import React, {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Divider} from "@/components/ui/divider";
import {useApp} from "@/application/contexts/ApplicationContext";


const ScreenWrapper = ({children}) => {
    const {theme} = useApp()

    return (
        <View style={{flex: 1}}>
            <SafeAreaView>
                <StatusBar style={'dark'} backgroundColor={theme === 'light' ? '#ffffff' : '#15151c'} />
                <Divider className={'dark:bg-white bg-background-dark'}/>
                {
                    children
                }
            </SafeAreaView>
        </View>
    )
}
export default ScreenWrapper