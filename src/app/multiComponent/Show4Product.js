import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemProduct from './ItemProduct';

const Show4Product = (props) => {
    const { data,
        navigation,
        title,
        style,
        showMore
    } = props;
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
            <ItemProduct />
            <View style={styles.showMore}>
                <Text style={styles.txtShowMore}>Xem thêm {title}</Text>
            </View>
            
        </View>
    )
}

export default Show4Product

const styles = StyleSheet.create({
    txtShowMore:{
        color: '#221F1F',
        textAlign: 'right',
        fontWeight: '500',
        fontFamily: 'Lato',
        fontSize: 16,
        lineHeight: 20,
        textDecorationLine: 'underline',

    },
    showMore:{
        width: '100%',
    },
    title: {
        color: '#221F1F',
        lineHeight: 34,
        fontWeight: '500',
        fontFamily: 'Lato',
        fontSize: 24,
    },
    container: {
        width: '100%',
        flexDirection: 'column',

    }
})