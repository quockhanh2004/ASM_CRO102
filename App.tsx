import { StyleSheet, StatusBar, View, SafeAreaView } from 'react-native'
import React from 'react'
import { AppProvider } from './src/app/main/AppContext'
import AppNavigation from './src/app/AppNavigation'
const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
          <AppNavigation />
      </SafeAreaView>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})