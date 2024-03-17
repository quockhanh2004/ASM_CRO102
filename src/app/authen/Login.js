import { StyleSheet, Text, View, Image, TouchableOpacity, useWindowDimensions, StatusBar } from 'react-native'
import React, { useState, useContext, useEffect, useRef } from 'react'

import { AppContext } from '../main/AppContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import InputView from '../multiComponent/InputView';
import ButtonBig from '../multiComponent/ButtonBig';

import AxiosInstance from '../api/AxiosInstance';

const Login = (props) => {
    const { navigation } = props;
    const { isLogin, setIsLogin } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememnerMe, setRememberMe] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    const [logFailedLogin, setLogFailedLogin] = useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const checkInput = () => {
        let apply = true;

        apply = emailRef.current?.check();
        apply = passwordRef.current?.check();
        console.log(apply);
        return apply;
    }

    const changeRemember = () => {
        setRememberMe(!rememnerMe);
    };

    const loginApi = async () => {

        if (checkInput()) {
            // const response = await AxiosInstance().get('/users/login?email=' + email + '&&password=' + password);
            // console.log(response);
            // if (response.status === 200) {
            //     if (response.user) setIsLogin(true);
            // } else {
            //     setLoginFailed(true);
            //     setLogFailedLogin(response.msg);
            // }
            setIsLogin(true)
        }

    }


    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.imgHeaderContainer}>
                    <Image source={require('../../assest/images/background_login.png')} style={styles.imgHeader} />
                </View>
                <View style={styles.wellcomeContainer}>
                    <Text style={styles.wellcomeText}>Chào mừng bạn</Text>
                    <Text style={styles.loginText}>Đăng nhập tài khoản</Text>
                </View>
                <View style={styles.inputContainer}>
                    <InputView
                        onTextChange={setEmail}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address"
                        style={{ marginTop: 20, width: '100%' }}
                        ref={emailRef}
                    />
                    <InputView
                        onTextChange={setPassword}
                        value={password}
                        placeholder="Password"
                        keyboardType="default"
                        hidePassword={true}
                        style={{ marginTop: 10, width: '100%' }}
                        ref={passwordRef}
                    />
                    {loginFailed && <Text style={styles.txtLoginFailed}>{logFailedLogin}</Text>}
                </View>
                <View style={styles.rememberMeContainer}>
                    <TouchableOpacity style={styles.rememnerMe} onPress={changeRemember}>
                        <Image source={rememnerMe ? require('../../assest/icons/isRemember.png') : require('../../assest/icons/notRemember.png')}
                            style={styles.icRemember} />
                        <Text style={[styles.rememberMeText, rememnerMe && { color: '#007537' }]}>Nhớ tài khoản</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>

                <ButtonBig
                    style={{ paddingHorizontal: 30, marginTop: 25 }}
                    title="Đăng nhập"
                    onPress={() => loginApi()}
                />

                <View style={styles.ortherContainer}>
                    <View style={styles.ortherLine} />
                    <Text style={{ fontSize: 12, color: 'black', marginHorizontal: 10 }}>Hoặc</Text>
                    <View style={styles.ortherLine} />
                </View>

                <View style={styles.loginOtherContainer}>
                    <TouchableOpacity style={styles.btnGoogle}>
                        <Image source={require('../../assest/icons/google.png')}
                            style={styles.imgGoogle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnFacebook}>
                        <Image source={require('../../assest/icons/facebook.png')}
                            style={styles.imgFacebook} />
                    </TouchableOpacity>
                </View>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerBtnText}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    registerBtnText: {
        color: '#009245',
        fontSize: 12,
        fontWeight: '400',

    },
    registerBtn: {
        marginStart: 7
    },
    registerText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '400'
    },
    registerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 29
    },
    imgFacebook: {
        width: 32,
        height: 32,
    },
    imgGoogle: {
        width: 32,
        height: 32,
    },
    btnFacebook: {
        marginStart: 15,
        width: 32,
        height: 32,
    },
    btnGoogle: {
        marginEnd: 15,
        width: 32,
        height: 32,
    },
    loginOtherContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },
    ortherLine: {
        backgroundColor: 'green',
        flexGrow: 1,
        height: 1
    },
    ortherContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 30
    },
    forgotPasswordText: {
        color: '#007537',
        fontSize: 11,
        fontWeight: '500',
    },
    forgotPassword: {

    },
    rememberMeText: {
        fontSize: 11,
        fontWeight: '500',
        color: '#949090',
        marginStart: 5,
    },
    icRemember: {
        width: 22,
        height: 22,
    },
    rememnerMe: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rememberMeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 22,
        paddingHorizontal: 30,
        marginTop: 13,
    },
    txtLoginFailed: {
        width: '100%',
        fontSize: 11,
        fontWeight: '600',
        color: '#CE0000',
        textAlign: 'left',
        marginTop: 6
    },
    inputView: {
        borderWidth: 1,
        width: '100%',
        height: 46,
        borderRadius: 10,
        paddingHorizontal: 14,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        paddingHorizontal: 30,
    },
    loginText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
        fontFamily: 'Poppins'
    },
    wellcomeText: {
        fontSize: 30,
        fontWeight: '700',
        color: 'black',
        fontFamily: 'Poppins'
    },
    wellcomeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    imgHeader: {
        width: useWindowDimensions.width,
        height: 360,
    },
    imgHeaderContainer: {
        width: '100%',
        height: 'auto',
    },
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
})