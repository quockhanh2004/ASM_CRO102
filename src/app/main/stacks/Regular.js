import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Show4Product from '../../multiComponent/Show4Product'
import Navigator from '../../multiComponent/Navigator'
import Category from '../../multiComponent/Category'

const Regular = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Navigator
        title={"Cây trồng"}
        iconLeft={require('../../../assest/icons/back.png')}
        iconRight={require('../../../assest/icons/cart.png')}
        actionLeft={() => navigation.goBack()}
        actionRight={() => navigation.navigate('Cart')}
        
        style={{ marginTop: 30, marginHorizontal: 24 }} />
      <Category
        style={{
          marginTop: 18,
          marginHorizontal: 24,
        }}
        selectedAll={false}
      />
      <Show4Product
        data={data}
        navigation={navigation} />
    </View>
  )
}

export default Regular

const styles = StyleSheet.create({
  
})
const data = [
  { key: '1', name: 'Item 1' },
  { key: '2', name: 'Item 2' },
  { key: '3', name: 'Item 3' },
  { key: '4', name: 'Item 4' },
  { key: '5', name: 'Item 5' },
  { key: '6', name: 'Item 6' },
];