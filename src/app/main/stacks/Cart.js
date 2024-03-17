import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../AppContext';
import Navigator from '../../multiComponent/Navigator';
import ItemCart from '../../multiComponent/ItemCart';
import ButtonNomal from '../../multiComponent/ButtonNomal';
const Cart = (props) => {
  const { navigation } = props;
  const { cart, setCart } = useContext(AppContext);
  const [localCart, setlocalCart] = useState(cart)
  const [choseItem, setchoseItem] = useState([1]);
  
  const removeChoseItem = () => {
    setCart([]);
    setchoseItem([]);
  };

  useEffect(() => {
    setlocalCart(cart);
  }, [cart])

  return (
    <View style={styles.container}>
      <Navigator
        iconLeft={require('../../../assest/icons/back.png')}
        title={"GIỎ HÀNG"}
        style={{ height: 55, marginTop: 20, paddingHorizontal: 24, }}
        actionLeft={() => navigation.goBack()}
        iconRight={choseItem.length > 0 && require('../../../assest/icons/trash.png')}
        actionRight={() => removeChoseItem()}
      />
      <View style={styles.main}>
        {localCart.length <= 0 && <Text style={[styles.txtCartNull]}>
          Giỏ hàng của bạn hiện đang trống
        </Text> || <ItemCart id={cart[0]?.id} quantity={2} />}
      </View>
      {choseItem.length > 0 && <View style={styles.payMent}>
        <View style={styles.titleContainer}>
          <Text style={styles.titlePay}>Tạm tính</Text>
          <Text style={styles.price}>
            {Number(500000).toLocaleString('vi-VN')}đ
          </Text>
        </View>
        <ButtonNomal
          title={'Tiến hành thanh toán'}
          icon={require('../../../assest/icons/nextBTN.png')}
          style={styles.button}
        />
      </View>}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  button: {
    marginTop: 11.5,
  },
  price: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: '500',
    lineHeight: 22,
  },
  titlePay: {
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: '400',
    lineHeight: 20,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  main: {
    paddingHorizontal: 24,
  },
  payMent: {
    position: 'absolute',
    width: '100%',
    marginHorizontal: 'auto',
    alignItems: 'center',
    flexDirection: 'column',
    bottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  txtCartNull: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: '400',
    lineHeight: 20,
    width: '100%',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'column',
    height: '100%',
  }
})