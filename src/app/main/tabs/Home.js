import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Show4Product from '../../multiComponent/Show4Product'

const Home = (props) => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
        />
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <Image source={require('../../../assest/images/imgHeader.png')} style={styles.imgMainHeader} />
          </View>
          <View style={styles.topHeader}>
            <Text style={styles.title}>Planta - toả sáng{`\n`}không gian nhà bạn</Text>
            <TouchableOpacity style={styles.imgHeader}>
              <Image source={require('../../../assest/icons/cart.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.newProduct}>
              <Text style={styles.txtHangMoi}>Xem hàng mới về</Text>
              <Image source={require('../../../assest/icons/next.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <Show4Product title={'Cây trồng'} style={{ marginTop: 15, paddingHorizontal: 25, }} />
        <Show4Product title={'Chậu cây trồng'} style={{ marginTop: 15, paddingHorizontal: 25, }} />
        <Show4Product title={'Phụ kiện'} style={{ marginTop: 15, paddingHorizontal: 25, }} />

        <View style={styles.newComboContainer}>
          <Text style={styles.txtCombo}>Combo chăm sóc (mới)</Text>
          <View style={styles.itemNew}>
            <View style={styles.txtNewContainer}>
              <Text style={styles.txtNewTitle}>Lemon Balm Grow Kit</Text>
              <Text style={styles.txtNewInfo}>Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...</Text>
            </View>
            <Image source={require('../../../assest/images/imgNewCombo.png')} style={styles.imgNewCombo} />
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  newComboContainer:{
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginBottom: 10,
  },
  imgNewCombo: {
    width: '35%',
    height: 134,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,

  },
  txtNewInfo: {
    color: '#7D7B7B',
    fontWeight: '400',
    fontFamily: 'Lato',
    fontSize: 14,
    lineHeight: 20,
  },
  txtNewTitle: {
    color: '#221F1F',
    fontWeight: '500',
    fontFamily: 'Lato',
    fontSize: 16,
    lineHeight: 22,
  },
  txtNewContainer: {
    width: '65%',
    padding: 24,
    flexDirection: 'column',
  },
  itemNew: {
    borderRadius: 8,
    height: 134,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    width: '100%',
  },
  txtCombo: {
    color: '#221f1f',
    marginTop: 15,
    textAlign: 'left',
    width: '100%',
    fontSize: 24,
    height: 49,
    lineHeight: 34,
    fontWeight: '500',
    fontFamily: 'Lato',
  },
  txtHangMoi: {
    color: '#007537',
    width: '100%',
    marginEnd: 4,
    fontSize: 16,
    fontWeight: '500',
    start: 25,
  },
  newProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 115,
  },
  imgMainHeader: {
    width: '100%',
    height: 205,
    marginTop: 69,
  },
  mainHeader: {
    width: '100%',
    flexDirection: 'column',
  },
  imgHeader: {
    position: 'absolute',
    end: 0,
    top: 24,
    end: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: "#221F1F",
    position: 'absolute',
    marginTop: 21,
    start: 25,
  },
  topHeader: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    paddingHorizontal: 25,
    marginTop: 31,
  },
  header: {
    width: '100%',
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    marginBottom: 10,
    // backgroundColor: '#fff',
  }
})