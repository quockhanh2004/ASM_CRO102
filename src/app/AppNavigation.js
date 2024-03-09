import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthenStackNavigation from './authen/AuthenStackNavigation'
// import MainStackNavigation from './authen/AuthenStackNavigation.js'
import { AppContext } from './main/AppContext'

const AppNavigation = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <NavigationContainer>
            {/* {
                isLogin ?
                    <MainStackNavigation /> :
                    <AuthenStackNavigation />
            } */}
            <AuthenStackNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation