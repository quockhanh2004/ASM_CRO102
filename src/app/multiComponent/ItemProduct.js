import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RenderItems = ({ data, navigation }) => {
    // console.log(data);
    return data.map(item => (
        <TouchableOpacity key={item.key} style={styles.item} onPress={() => navigation.navigate('Panse', {product: item})}>
            <Image source={require('../../assest/images/imgProduct.png')}
                style={styles.imgProduct}
                resizeMode='contain' />
            <Text style={styles.txtName}>{item.name}</Text>
            <Text style={styles.txtLoai}>{item.loai || 'Ưa bóng'}</Text>
            <Text style={styles.txtPrice}>{item.price || '250.000đ'}</Text>
        </TouchableOpacity>
    ));
};
const ItemProduct = ({data, navigation}) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <RenderItems
                data={data}
                navigation={navigation} />
        </ScrollView>
    )
}

export default ItemProduct

const styles = StyleSheet.create({
    txtPrice: {
        color: '#007537',
        fontWeight: '500',
        fontFamily: 'Lato',
        fontSize: 16,
        lineHeight: 22,
    },
    txtLoai: {
        color: '#7D7B7B',
        fontWeight: '400',
        fontFamily: 'Lato',
        fontSize: 14,
        lineHeight: 20,
    },
    txtName: {
        color: '#221F1F',
        fontWeight: '500',
        fontFamily: 'Lato',
        fontSize: 16,
        lineHeight: 22,
        marginTop: 4,
    },
    imgProduct: {
        width: 155,
        height: 134,
        borderRadius: 8,
        backgroundColor: '#eee'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    item: {
        width: 155,
        height: 202,
        margin: 5,
        borderRadius: 8,
    },
})