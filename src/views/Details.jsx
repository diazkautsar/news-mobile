import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Linking,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native'
import {
  Card, CardItem, Left, Right, Body
} from 'native-base'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height)

const Details = ({ route }) => {
  const [content, setContent] = useState('')
  const { detail } = route.params

  useEffect(() => {
    const editContent = (param) => {
      let newArr = param.split(' ')
      setContent(newArr.splice(0, newArr.length - 3).join(' '))
    }
    editContent(detail.content)
  }, [])

  const OpenWeb = ({ url }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url)
      if (supported) {
        await Linking.openURL(url)
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`)
      }
    }, [url])

    return (
      <TouchableOpacity onPress={handlePress}>
        <Card>
          <CardItem cardBody>
            <Image 
              style={{ width: '100%', height: 200 }}
              source={{ uri: `${detail.urlToImage}` }}
            />
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{ fontSize: 16 }}>{content} ... view on web</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <OpenWeb url={`${detail.url}`} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    justifyContent: 'center'
  }
})

export default Details