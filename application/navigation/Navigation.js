import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from "./RootStackNavigator";

import {useApp} from "@/application/contexts/ApplicationContext";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {Appearance} from "react-native";


const AppNavigator = () => {

    const {setAppTheme, theme} = useApp()

    useEffect(() => {
        const subscriber = Appearance.addChangeListener(({colorScheme}) => {
            // Update your app's theme or styles here
            setAppTheme(colorScheme)
            console.log('Theme changed!');
        });
    }, []);

    console.log('THEME',theme)
    return (
        <GluestackUIProvider mode={'system'}>
            <NavigationContainer>
                <RootStackNavigator/>
            </NavigationContainer>
        </GluestackUIProvider>
    );
}

export default AppNavigator