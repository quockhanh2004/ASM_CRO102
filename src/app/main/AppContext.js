import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
    const { children } = props;
    const [cart, setCart] = useState([
        {
            id: 1,
            quantity: 1
        }
    ]);
    const [history, setHistory] = useState([]);
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    return (
        <AppContext.Provider
            value={{ cart, setCart, isLogin, setIsLogin, history, setHistory, user, setUser }}>
            {children}
        </AppContext.Provider>
    )
}