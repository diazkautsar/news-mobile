import React, { useEffect, useReducer } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  FlatList
} from 'react-native'
import {
  initialState,
  reducer
} from '../store'
import {
  AxiosCategories,
  SearchNews
} from '../axios/index'
import Loading from '../components/Loading'
import CardNews from '../components/CardNews'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const News = ({ route }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { name } = route.params
  const { type } = route.params

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: 'SET_LOADING', value: true })
      try {
        if (type === 'category') {
          const { data } = await AxiosCategories(name)
          dispatch({ type: 'SET_NEWS', value: data.articles }) 
        } else {
          const { data } = await SearchNews(name)
          dispatch({ type: 'SET_NEWS', value: data.articles }) 
        }
      } catch (error) {
        console.log(error)
      } finally {
        dispatch({ type: 'SET_LOADING', value: false })
      }
    }
    fetchData()
  }, [name, type])

  if (state.news.length === 0 || state.loading) return <Loading />

  return (
    <View style={styles.container}>
      <FlatList 
        data={state.news}
        renderItem={({ item }) => <CardNews data={item} />}
        keyExtractor={item => item.urlToImage}
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
  }
})

export default News