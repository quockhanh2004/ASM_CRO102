import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, } from 'react-native'
import React, { useState } from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import InputView from '../multiComponent/InputView';
import ButtonBig from '../multiComponent/ButtonBig';

const Register = (props) => {
    const { navigation } = props;
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Image source={require('../../assest/images/background_register.png')} style={styles.imgHeader} />
                <Text style={styles.txtHeader}>Đăng ký</Text>
                <Text style={styles.txtHeader1}>Tạo tài khoản</Text>
                <View style={styles.inputContainer}>
                    <InputView
                        placeholder="Họ tên"
                        value={fullName}
                        onTextChange={setFullName}
                    />
                    <InputView
                        placeholder="E-mail"
                        value={email}
                        onTextChange={setEmail}
                        style={{ marginTop: 10 }}
                    />
                    <InputView
                        placeholder="Số điện thoại"
                        value={phoneNumber}
                        onTextChange={setPhoneNumber}
                        style={{ marginTop: 10 }}
                    />
                    <InputView
                        placeholder="Mật khẩu"
                        value={password}
                        onTextChange={setPassword}
                        style={{ marginTop: 10 }}
                        hidePassword={true}
                    />
                </View>
                <View style={styles.TermsConditions}>
                    <Text style={styles.txtTermsConditions}>
                        Để đăng ký tài khoản, bạn đồng ý {' '}
                        <Text style={styles.txtTermsConditionsText}>
                            Terms & Conditions
                        </Text>
                        <Text style={styles.txtTermsConditions}>{'\nand '}</Text>
                        <Text style={styles.txtTermsConditionsText}>
                            Privacy Policy
                        </Text>
                    </Text>
                </View>
                <ButtonBig
                    style={styles.buttonRegister}
                    title="Đăng ký"
                    onPress={() => navigation.navigate('Login')}
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
                    <Text style={styles.registerText}>Đã có tài khoản</Text>
                    <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.registerBtnText}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </KeyboardAwareScrollView>
    )
}

export default Register

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
        marginTop: 30
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
        paddingHorizontal: 31,
        marginTop: 21,
    },
    buttonRegister: {
        paddingHorizontal: 31,
        marginTop: 20,
    },
    txtTermsConditionsText: {
        fontSize: 12,
        color: '#009245',
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
    txtTermsConditionsBtn: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        top: 0
    },
    txtTermsConditions: {
        color: 'black',
        fontSize: 12,
        fontWeight: '400',
        flexDirection: 'row',
        height: 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
    },
    TermsConditions: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    inputContainer: {
        width: '100%',
        marginTop: 12,
        paddingHorizontal: 31,
    },
    txtHeader1: {
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
        marginTop: 13
    },
    txtHeader: {
        color: 'black',
        fontSize: 30,
        fontWeight: '700',
        fontFamily: 'Poppins',
        marginTop: -20,
    },
    imgHeader: {
        width: '100%',
        height: 230,
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