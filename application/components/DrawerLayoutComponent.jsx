import {Pressable} from "react-native";
import ScreenWrapper from "./ScreenWrapper";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {Icon} from "@/components/ui/icon";
import {Divider} from "@/components/ui/divider";
import {
    ArrowLeftIcon,
    MenuIcon,
} from "lucide-react-native";
import React, {useState} from "react";
import {Box} from "@/components/ui/box";
import {Text} from "@/components/ui/text";
import {StatusBar} from "expo-status-bar";

const DrawerLayoutComponent = (props) => {
    const navigation = useNavigation()
    // const navigation = props.navigation
    const [canGoBack, setCanGoBack] = useState(navigation.canGoBack())

    // console.log(navigation.getState())
    return (<>
        <ScreenWrapper>

            <Box className={'justify-start flex-row p-3 items-center dark:bg-background-dark'}>
                {
                    navigation.getState().index !== 0 && canGoBack
                        ?
                        <Pressable
                            onPress={() => navigation.goBack()}
                        >
                            <Icon as={ArrowLeftIcon} className={'text-black dark:text-white'} style={{width: 35, height: 35, marginLeft:10, marginRight: 10, tintColor: 'white'}} size={'medium'}/>
                        </Pressable>
                        :
                        <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon as={MenuIcon} className={'text-black dark:text-white'} style={{width: 35, height: 35, marginLeft:10, marginRight: 10}} size={'medium'}/>
                        </Pressable>
                }
                <Text className={'text-black dark:text-white'} style={{fontSize: 20,}}> {props.title} </Text>
            </Box>
            <Divider style={{backgroundColor: 'black'}}/>

            {props.children}
        </ScreenWrapper>
    </>)
}

export default DrawerLayoutComponent