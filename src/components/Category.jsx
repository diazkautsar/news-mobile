import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Category = (props) => {
  const navigation = useNavigation()
  const name = props.data.name
  const pict = props.data.pict

  const goToNews = () => {
    navigation.navigate('News', {
      name,
      type: 'category'
    })
  }

  return (
    <TouchableWithoutFeedback onPress={goToNews}>
      <View style={styles.container}>
        <Image source={pict} style={{ width: '100%', height: 200 }}/>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
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