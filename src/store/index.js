export const initialState = {
  news: [],
  loading: false
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.value
      }
    
    case 'SET_NEWS':
      return {
        ...state,
        news: action.value
      }
  }
  return state
}