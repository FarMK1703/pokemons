import { configureStore } from '@reduxjs/toolkit'
import pokemonStoreSlice from './pokemonStoreSlice'


export const store = configureStore({
  reducer: {
    pokemonStore:pokemonStoreSlice
  },
  devTools:true
})