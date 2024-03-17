import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ButtonNomal = ({ title, style, onPress, icon, unActivate }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, style, unActivate && { backgroundColor: '#ABABAB'}]}>
            <Text style={styles.title}>{title}</Text>
            {!!icon && <Image
                source={icon}
                style={styles.icon}
            />}
        </TouchableOpacity>
    )
}

export default ButtonNomal

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Lato',
        fontWeight: '500',
        lineHeight: 22,
    },
    container: {
        width: '100%',
        backgroundColor: '#007537',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        height: 50,
        // padding: 10,
    }
})