import React, { useCallback } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Foundation } from '@expo/vector-icons';
import { Card, CardItem, Left, Body } from 'native-base'

const CardNews = (props) => {
  const navigation = useNavigation()

  const goToDetails = () => {
    navigation.navigate('Details', {
      detail: props.data
    })
  }


  const OpenUrl = ({ url }) => {
    const handlePress = useCallback(async () => {
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
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Foundation name="web" size={16} color="black" />
          <Text style={{ fontSize: 14, marginLeft: 5}}>
            {props.data.source.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  
  return (
    <View style={styles.container}>
      <Card>
        <TouchableOpacity onPress={goToDetails}>
          <CardItem cardBody>
            <Image
              style={{ width: '100%', height: 200, borderRadius: 5 }} 
              source={{ uri: `${props.data.urlToImage}` }}
            />
          </CardItem>
          <CardItem>
            <Body>
              <Text>{props.data.title}</Text>
            </Body>
          </CardItem>
        </TouchableOpacity>
        <CardItem>
          <Left>
            <OpenUrl url={`${props.data.source.name}`} />
          </Left>
        </CardItem>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5
  }
})

export default CardNews