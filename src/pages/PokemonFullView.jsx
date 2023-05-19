import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPokemons } from '../store/pokemonStoreSlice'

export default function PokemonFullView() {
  const {name}=useParams()
  const pokemons=useSelector(selectPokemons)
  const pokemon=pokemons[name]

  


  

  
 




  return (
   <div className='pokemonFullViewWrapper'>
     <div className='pokemonFullView'>
        <h1>{pokemon.name}</h1>
        <div className='image'
            style={{backgroundImage: `url(${pokemon.sprites.other.dream_world.front_default})`}}
        >    
        </div>
        <h2>Способности</h2>
        <ul>
            {pokemon.abilities.map((item,index)=>{
                return <li key={index}>
                    {item.ability.name}
                </li>
            })}
        </ul>

        <h2>Характеристики</h2>

        <ul>
            <li>Здоровье: {pokemon.stats[0].base_stat}</li>
            <li>Атака: {pokemon.stats[1].base_stat}</li>
            <li>защита: {pokemon.stats[2].base_stat}</li>
            <li>Скорость: {pokemon.stats[5].base_stat}</li>
            

        </ul>
    </div>
   </div>
  )
}
