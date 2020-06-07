import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import {
  SearchBar
} from 'react-native-elements'

const SearchBarComponent = () => {
  const navigation = useNavigation()
  const [search, setSearch] = useState('')
  const handleSearch = async () => {
    navigation.navigate('News', {
      name: search
    })
  }

  return (
    <SearchBar
      placeholder="Type Here..."
      containerStyle={{backgroundColor: "white" }}
      inputContainerStyle={{ marginTop: 15 }}
      platform="android"
      value={search}
      onChangeText={(value) => setSearch(value)}
      searchIcon={{ onPress: handleSearch }}
    />
  )
}

export default SearchBarComponent