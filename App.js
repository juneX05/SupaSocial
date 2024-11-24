import "./global.css";
import {ApplicationProvider} from "@/application/contexts/ApplicationContext";
import AppNavigator from "@/application/navigation/Navigation";
import React from "react";

export default function App() {
    return (
        <ApplicationProvider>
            <AppNavigator/>
        </ApplicationProvider>
    );
}
