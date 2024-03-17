import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Navigator = ({ iconLeft, title, iconRight, style, actionLeft, actionRight }) => {
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity style={[styles.imgContainer, {}]} onPress={actionLeft}>
                {!!iconLeft && <Image source={iconLeft} style={styles.icon} />}
            </TouchableOpacity>
            <Text style={styles.txt}>{title}</Text>
            <TouchableOpacity style={[styles.imgContainer, {}]} onPress={actionRight}>
                {!!iconRight &&
                    <Image style={styles.icon} source={iconRight} />
                }
            </TouchableOpacity>
        </View>
    )
}

export default Navigator

const styles = StyleSheet.create({
    txt: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        textTransform: 'uppercase',
        fontFamily: 'Lato',
        // lineHeight: 20,
    },
    icon: {
        width: 24,
        height: 24,
    },
    imgContainer: {
        width: 24,
        height: 24,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
        marginHorizontal: 5,
        alignItems: 'center',
    }
})