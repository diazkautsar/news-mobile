import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native'

const Category = (props) => {
  const name = props.data.name
  const pict = props.data.pict

  return (
    <View style={styles.container}>
      <Image source={pict} style={{ width: '100%', height: 200 }}/>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5
  },
  text: {
    fontSize: 20
  }
})

export default Category