import React, { useCallback } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableWithoutFeedback,
  Alert
} from 'react-native'
import { Foundation } from '@expo/vector-icons';

const CardNews = (props) => {

  const OpenUrl = ({ url }) => {
    const handlePress = useCallback(async () => {
      console.log(url)
      const supported = await Linking.canOpenURL(`https://${url}`)
      if (supported) {
        await Linking.openURL(`https://${url}`)
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`)
      }
    }, [url])

    return (
      <TouchableWithoutFeedback
        onPress={handlePress}
      >
        <Foundation name="web" size={16} color="black">
          <Text style={{ fontSize: 12 }}>
            {props.data.source.name}
          </Text>
        </Foundation>
      </TouchableWithoutFeedback>
    )
  }
  return (
    <View style={styles.container}>
      <Image
        style={{ width: '100%', height: 200, borderRadius: 5 }} 
        source={{ uri: `${props.data.urlToImage}` }}
      />
      <View style={styles.title}>
        <Text>{props.data.title}</Text>
        <View style={styles.website}>
          <OpenUrl url={`${props.data.source.name}`} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  title: {
    // backgroundColor: 'red',
  },
  website: {
    marginTop: 5
  }
})

export default CardNews