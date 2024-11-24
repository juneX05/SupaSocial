import {View, StyleSheet, Appearance, useColorScheme} from "react-native";
import {useEffect} from "react";
import {useApp} from "../contexts/ApplicationContext";
import {supabase} from "../lib/supabase";
import Loading from "./Loading";
const LoaderComponent = ({navigation}) => {
    const {setAuth, theme, setTheme} = useApp()

    useEffect(() => {
        console.log('Checking Auth...')
        supabase.auth.onAuthStateChange((_event, session) => {
            console.log('SESSION', session);
            if (session) {
                setAuth(session?.user)
                navigation.replace('Drawer')
            } else {
                navigation.replace('Login')
            }
        })
    }, []);

    return (
        <View style={styles.container}>
            <Loading />
        </View>
    )
}

export default LoaderComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',

    },
})