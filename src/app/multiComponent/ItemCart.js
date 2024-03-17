import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'

import AxiosInstance from '../api/AxiosInstance'

const ItemCart = (props) => {
    const { id, quantity } = props;
    const [data, setdata] = useState({})
    const [checkBox, setcheckBox] = useState(false)

    const check = () => {
        setcheckBox(!checkBox)
    }
    const getItem = async () => {
        const response = await AxiosInstance().get(`/trees/getFromId?id=${id}`)
        setdata(response);
        return;
    }
    useEffect(() => {
        getItem()
        // console.log(data);
    }, [])
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkBoxContainer} onPress={() => check()}>
                {checkBox && <Image
                    source={require('../../assest/icons/checkBoxTrue.png')}
                    style={styles.checkBox} /> || <Image style={styles.checkBox}
                        source={require('../../assest/icons/checkBoxFalse.png')} />
                }
            </TouchableOpacity>
            <View style={styles.itemContainer}>
                <Image style={styles.imgProduct} source={{ uri: data.image } || require('../../assest/images/imgLoading.png')} />
                <View style={styles.containerProduct}>
                    <View style={styles.name_loai}>
                        <Text style={styles.name}>{data.ten} |</Text>
                        <Text style={styles.loai}> {data.loai}</Text>
                    </View>
                    <Text style={styles.price}>{Number(data.gia).toLocaleString('vi-VN')}đ</Text>
                    <View style={styles.remove_add}>
                        <TouchableOpacity style={styles.remove}>
                            <Image style={styles.imgRemove_add} source={require('../../assest/icons/remove.png')} />
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <TouchableOpacity style={styles.add}>
                            <Image style={styles.imgRemove_add} source={require('../../assest/icons/add.png')} />
                        </TouchableOpacity>
                        <Text style={styles.delete}>Xóa</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default ItemCart

const styles = StyleSheet.create({
    delete: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        fontFamily: 'Lato',
        lineHeight: 20,
        marginStart: 38,
        textDecorationLine: 'underline',
        fontFamily: 'Lato'
    },
    quantity: {
        width: 58,
        textAlign: 'center',
    },
    imgRemove_add: {
        width: 20,
        height: 20,
    },
    remove_add: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 13,
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        fontFamily: 'Lato',
        color: '#007537',
    },
    loai: {
        fontSize: 14,
        color: '#7d7b7b',
        fontFamily: 'Lato',
        lineHeight: 20,
        fontWeight: '400',
    },
    name: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Lato',
    },
    name_loai: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerProduct: {
        flexDirection: 'column',
        marginStart: 15,
    },
    imgProduct: {
        width: 77,
        height: 77,
        borderRadius: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        marginStart: 28,
    },
    checkBox: {
        width: 20,
        height: 20,
    },
    checkBoxContainer: {
        width: 20,
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    }
})