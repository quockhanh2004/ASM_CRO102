import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InfoProduct = ({ txtLeft, txtRight, styleLeft, styleRight, style }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styleLeft}>{txtLeft}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styleRight}>{txtRight}</Text>
            </View>
        </View>
    )
}

export default InfoProduct

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1,
        paddingBottom: 4,
    }
})