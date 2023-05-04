import React, { useEffect, useState } from 'react'
import { useQuery} from '@tanstack/react-query'
import Loader from './Loader'
import { useDispatch, useSelector} from 'react-redux'
import { addPokemon, selectPokemons } from '../store/pokemonStoreSlice'


export default function PokemonInfo({url}) {

const dispatch=useDispatch()
const pokemons=useSelector(selectPokemons)





const {isLoading,error,data}=useQuery({
  queryKey:['pokInfo',url],
  queryFn: ()=>
      fetch(url).then((res)=>res.json()),

  onSuccess: (data)=>{
    
    dispatch(addPokemon(data))
    
   
  }    
      
  
})






if(isLoading) return <Loader/>


if(error) return <div>{error}</div>


return (
    <div className='pokemonInfo'>
      
       <div className='image'
            style={{backgroundImage: `url(${data.sprites.other.dream_world.front_default})`}}
       ></div>
    
 </div>
)
}
