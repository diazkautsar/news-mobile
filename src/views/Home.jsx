import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  Platform,
  StatusBar
} from 'react-native';
import categories from '../assets/catergories'

import Category from '../components/Category'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Category data={{name: item.name, pict: item.pict}} />}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
  },
  imageBackgorund: {
    width: screenWidth,
    height: screenHeight
  }
})

export default Home