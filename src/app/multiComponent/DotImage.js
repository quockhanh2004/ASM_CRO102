import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DotImage = ({ quantity, style, selected }) => {
    // console.log(quantity);
    return (
        <View style={[styles.container, style]}>
            {Array.from({ length: quantity }, (_, i) => (
                <Dot
                    key={i}
                    selected={selected}
                    position={i}
                />
            ))}
        </View>
    )
}

const Dot = ({ selected, position }) => {
    return (
        <View style={[styles.dot, position === selected && { backgroundColor: '#221F1F' }]} />
    )
}

export default DotImage

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor: '#ABABAB'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})