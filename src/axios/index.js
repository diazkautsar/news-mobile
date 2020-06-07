import axios from 'axios'

export const AxiosCategories = (category) => {
  return axios({
    method: 'get',
    url: `http://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=7f1f2262f71244508e69147fcb017eb4`,
  });
}

export const SearchNews = (query) => {
  return axios({
    method: 'get',
    url: `http://newsapi.org/v2/everything?q=${query}&apiKey=7f1f2262f71244508e69147fcb017eb4`
  })
}