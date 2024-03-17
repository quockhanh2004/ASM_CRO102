import { StyleSheet, Text, View, Image, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { AppContext } from '../AppContext'
import Navigator from '../../multiComponent/Navigator';
import DotImage from '../../multiComponent/DotImage';
import Category from '../../multiComponent/Category';
import InfoProduct from '../../multiComponent/InfoProduct';
import ButtonNomal from '../../multiComponent/ButtonNomal';


const Panse = (props) => {
  const { navigation, route } = props;
  const { product } = route.params;
  const [selectImage, setselectImage] = useState(0)
  const { colorScheme } = useColorScheme();
  const [selectProduct, setSelectProduct] = useState(0)

  return (
    <View style={styles.container}>
      <Navigator
        iconLeft={require('../../../assest/icons/back.png')}
        iconRight={require('../../../assest/icons/cart.png')}
        style={{ height: 55, paddingHorizontal: 24, marginTop: 20 }}
        title={product.name || 'Spider Plant'}
        actionLeft={() => navigation.goBack()}
        actionRight={() => navigation.navigate('Cart')}
      />
      <View style={styles.imgContainer}>
        <Image source={require('../../../assest/images/imgProduct.png')} style={styles.img} resizeMode='stretch' />
        <View style={styles.controlImage}>
          <Image source={require('../../../assest/icons/back_image.png')} style={styles.back_image} />
          <DotImage
            quantity={product?.image?.length() || 3}
            selected={selectImage}
            style={styles.dotContainer}
          />
          <Image source={require('../../../assest/icons/next_image.png')} style={styles.next_image} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Category
          data={[{ name: 'Cây trồng' }, { name: 'Ưa bóng' }]}
          selectedAll={true}
          styleItem={{ marginEnd: 5 }}
        />
        <Text style={styles.txtPrice}>{Number(product.price || 250000).toLocaleString('vi-VN')}đ</Text>
        <InfoProduct
          txtLeft={"Chi tiết sản phẩm"}
          style={styles.title}
          styleLeft={{
            color: '#3A3A3A',
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'Lato',
          }}
        />
        <InfoProduct
          txtLeft={'Kích cỡ'}
          txtRight={product.size || 'Nhỏ'}
          styleLeft={styles.txtLeft}
          styleRight={styles.txtRight}
        />
        <InfoProduct
          txtLeft={'Xuất xứ'}
          txtRight={product.madeIn || 'Châu Phi'}
          styleLeft={styles.txtLeft}
          styleRight={styles.txtRight}
        />
        <InfoProduct
          txtLeft={'Tình trạng'}
          txtRight={`Còn ${product.quantity || 156} sp`}
          styleLeft={styles.txtLeft}
          styleRight={[styles.txtRight, { color: '#007537' }]}
        />
      </View>
      <View style={styles.payment}>
        <View style={styles.paymentTop}>
          <Text style={styles.txtPaymentLeft}>Đã chọn {selectProduct} sản phẩm</Text>
          <Text style={styles.txtPaymentRight}>Tạm tính</Text>
        </View>
        <View style={styles.paymentCenter}>
          <View style={styles.selectQuantity}>
            <TouchableOpacity>
              <Image source={require('../../../assest/icons/remove.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.txtQuantity}>{selectProduct}</Text>
            <TouchableOpacity>
              <Image source={require('../../../assest/icons/add.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.txtPrice, { color: '#000' }]}>{Number(product.price || 0).toLocaleString('vi-VN')}đ</Text>
        </View>
        <ButtonNomal
          unActivate={true}
          title={'CHỌN MUA'}
          style={{marginTop: 12.5}}
        />
      </View>

    </View>
  )
}

export default Panse

const styles = StyleSheet.create({
  txtQuantity: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Lato',
    color: '#000'
  },
  icon: {
    width: 24,
    height: 24,
  },
  selectQuantity: {
    flexDirection: 'row',
    width: '35%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtPaymentRight: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    color: '#000'
  },
  txtPaymentLeft: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    color: '#3A3A3A',
    lineHeight: 20,
  },
  paymentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  payment: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 24,
    // alignItems: 'center',
  },
  txtRight: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    color: '#3A3A3A'
  },
  txtLeft: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    color: '#3A3A3A'
  },
  title: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#221F1F',
  },
  txtPrice: {
    marginTop: 17,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Lato',
    color: '#007537',
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: 48
  },
  dotContainer: {
    bottom: 25,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  next_image: {
    top: '-37%',
    right: 24,
  },
  back_image: {
    top: '-37%',
    left: 24,
  },
  controlImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: '100%',
    height: 270,
    backgroundColor: '#F6F6F6',
  },
  imgContainer: {
    width: '100%',
    justifyContent: 'center',
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
})