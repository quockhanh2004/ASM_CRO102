import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
    const { children } = props;
    const [cart, setCart] = useState([]);
    const [history, setHistory] = useState([]);
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(true);
    return (
        <AppContext.Provider
            value={{ cart, setCart, isLogin, setIsLogin, history, setHistory, user, setUser }}>
            {children}
        </AppContext.Provider>
    )
}