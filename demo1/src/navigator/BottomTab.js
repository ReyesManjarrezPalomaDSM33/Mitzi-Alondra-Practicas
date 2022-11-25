import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

/* Components */
import HomeScreen from "../Components/navigator/ScreenStack/HomeScreen";
import SettingsScreen from "../Components/navigator/ScreenStack/SettingsScreen";
import ProfileScreen from "../Components/navigator/ScreenStack/ProfileScreen";

const Tab = createBottomTabNavigator();

export const BottomTab = () => {

    return (
        <Tab.Navigator
        screenOptions = {({route}) =>({
            tabBarIcon: (foused, size, color) => {

                let iconName='';

                switch (route.name){
                    case 'Home':
                        iconName = foused ? 'home' : 'home-outline';
                        break;
                    case 'Settings':
                        iconName = foused ? 'cog': 'cog-outline';
                        break;
                    case 'Profile':
                        iconName = foused ? 'person-circle' : 'person-circle-outline';
                    
                }
                return <Icon name = {iconName} size={25} color={color}/> 



            }
        })}
        >
            
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Settings' component={SettingsScreen}/>
            <Tab.Screen name='Profile' component={ProfileScreen}/>
        </Tab.Navigator>

    );
}