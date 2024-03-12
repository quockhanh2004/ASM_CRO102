import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import React, { useContext, useState } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppContext } from './AppContext'

import TabBarIcon from '../multiComponent/TabBarIcon'

import Home from './tabs/Home'
import User from './tabs/User'
import Search from './tabs/Search'
import Notification from './tabs/Notification'

const tabScreenOptions = ({ route }) => {
    const { cart } = useContext(AppContext);
    const { favorite } = useContext(AppContext);
    return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: '#fff'
        },

        tabBarIcon: ({ focused }) => {
            if (route.name == 'Home') {
                if (focused) {
                    return (
                        <TabBarIcon image={require('../../assest/icons/home.png')} focus={true} />
                    )
                }
                return <TabBarIcon image={require('../../assest/icons/home.png')} focus={false} />
            } else if (route.name == 'Search') {
                if (focused) {
                    return (
                        <TabBarIcon image={require('../../assest/icons/search.png')} focus={true} />
                    );
                }
                return (
                    <TabBarIcon image={require('../../assest/icons/search.png')} focus={false} />
                );
            }
            else if (route.name == 'Notification') {
                if (focused) {
                    return <TabBarIcon image={require('../../assest/icons/notification.png')} focus={true} />
                }
                return <TabBarIcon image={require('../../assest/icons/notification.png')} focus={false} />
            } else if (route.name == 'User') {
                if (focused) {
                    return <TabBarIcon image={require('../../assest/icons/user.png')} focus={true}/>
                }
                return <TabBarIcon image={require('../../assest/icons/user.png')} focus={false}/>
            }
        },
    }
}

const Tab = createBottomTabNavigator();
const MainTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={tabScreenOptions}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    )
}

// stacks
import Cart from './stacks/Cart'
import EditProfile from './stacks/EditProfile'
import Panse from './stacks/Panse'
import Payment from './stacks/Payment'
import Regular from './stacks/Regular'
const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Panse" component={Panse} />
            <Stack.Screen name="Regular" component={Regular} />
        </Stack.Navigator>
    )
}

export default MainStackNavigation

const styles = StyleSheet.create({
})