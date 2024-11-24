import React, {useState} from 'react';
import HomeScreen from "../modules/system/HomeScreen";
import {useApp} from "../contexts/ApplicationContext";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import UsersStackNavigator from "../modules/system/users/UsersStackNavigator";
import {Avatar, AvatarFallbackText, AvatarImage} from "@/components/ui/avatar";
import {VStack} from "@/components/ui/vstack";
import {Divider} from "@/components/ui/divider";
import {Icon} from "@/components/ui/icon";
import {Text} from "@/components/ui/text";
import {Home, LogOut, Users} from "lucide-react-native";

const { Navigator, Screen } = createDrawerNavigator();
const DrawerList = [
    {icon: Home, label: "Home", navigateTo: 'Home'},
    {icon: Users, label: "Users", navigateTo: 'UsersNav'},
]

const DrawerItems = props => {
    return DrawerList.map((el, i) => {
        return (
            <DrawerLayout selected={props.navigation.getState().index === i} navigation={props.navigation} key={i} icon={el.icon} label={el.label} navigateTo={el.navigateTo} />
        )
    })
}

const DrawerLayout = ({selected, icon, label, navigation, navigateTo}) =>{
    return (<>
        <View
            className={selected ? 'bg-background-dark dark:bg-white' : 'bg-white dark:bg-background-dark'}
            style={{
                borderRadius: 0,
            }}
        >
            <DrawerItem
                style={{
                    borderRadius: 0,
                }}
                icon={({color, size}) => <Icon as={icon} size={size} className={selected ? 'text-white dark:text-black' : 'text-black dark:text-white'} /> }
                label={() => <Text className={selected ? 'text-white dark:text-black' : 'text-black dark:text-white'}>{label}</Text>}
                onPress={() => {
                    navigation.navigate(navigateTo)
                }}
            />
        </View>

    </>)
}
const DrawerComponent = (props) => {
    return (
        <>
            <View className={'bg-white dark:bg-background-dark'} style={{flex: 1}}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View className="items-center justify-center flex-col gap-2 mb-2">
                                <Avatar size="lg">
                                    <AvatarFallbackText>User Image</AvatarFallbackText>
                                    <AvatarImage
                                        source={{
                                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                        }}
                                    />
                                </Avatar>
                                <VStack className="justify-center items-center">
                                    <Text className={'text-black dark:text-white'} size="lg">User Name</Text>
                                    <Text size="sm" className="text-typography-600 dark:text-typography-100">
                                        abc@gmail.com
                                    </Text>
                                </VStack>
                            </View>
                        </TouchableOpacity>
                        <Divider />
                        <View style={styles.drawerSection}>
                            <DrawerItems {...props}/>
                        </View>
                    </View>
                </DrawerContentScrollView>
                <View style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon as={LogOut} color={color} size={size} />
                        )}
                        onPress={ () => { console.log('Logout')}}
                        label={"Logout"} />
                </View>
            </View>

    </>)
}
const RootDrawerNavigator = () => {
    const {onLogout} = useApp()

    return (
        <Navigator screenOptions={{
            headerShown: false,
            swipeEnabled: false
        }}
                   drawerContent={props => <DrawerComponent {...props} />}
                   id='RootDrawerNavigator'
        >
            <Screen name='Home' component={HomeScreen}/>
            <Screen name='UsersNav' component={UsersStackNavigator}/>
        </Navigator>
    );
}

export default RootDrawerNavigator

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        borderBottomColor: '#dedede',
        paddingBottom:15,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 13,
        lineHeight: 14,
        color: '#6e6e6e',
        width: '100%',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#dedede',
        borderTopWidth: 1,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
