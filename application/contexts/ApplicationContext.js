import {createContext, useContext, useState} from "react";
import {supabase} from "../lib/supabase";
import {Alert, Appearance, useColorScheme} from "react-native";

const ApplicationContext = createContext();

export const ApplicationProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState(useColorScheme());

    const setAuth = authUser => {
        setUser(authUser)
    }

    const setUserData = userData => {
        setUser({...userData})
    }

    const setAppTheme = value => {
        setTheme(value)
    }

    const onLogout = async () => {
        setAuth(null)
        const {error} = await supabase.auth.signOut();
        if (error) {
            Alert.alert('Sign out', 'Error signing out.')
        }
    }

    return (
        <ApplicationContext.Provider
            value={{user, setAuth, setUserData, onLogout, theme, setAppTheme}}
        >
            {children}
        </ApplicationContext.Provider>
    )
}

export const useApp = () => useContext(ApplicationContext)
