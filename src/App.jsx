import './App.css'
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'

import {Route, Routes} from 'react-router-dom'

import MainPage from './pages/MainPage'
import PokemonFullView from './pages/PokemonFullView'


const queryClient=new QueryClient()



function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
         <Route path='/' element={<MainPage/>}/>
         <Route path='/pokemon-page/:name' element={<PokemonFullView/>}/>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
