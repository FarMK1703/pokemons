import React from 'react'
import { useQuery} from '@tanstack/react-query'
import PokemonInfo from '../components/PokemonInfo'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'






export default function MainPage() {
    const navigate = useNavigate();
  
  

    const {
      status,
      data,
      error,
      isFetching,
      isFetchingNextPage,
      isFetchingPreviousPage,
      fetchNextPage,
      fetchPreviousPage,
      hasNextPage,
      hasPreviousPage,
    } = useInfiniteQuery(
      ['pokemons'],
      async ({pageParam=0}) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageParam}`)
        return res.data
      },
      
      {
       
        getNextPageParam: (_lastPage, pages) => {
          console.log(pages.length)
          return pages.length+1
        },
      },
    )

    

    if(status==='success'){
      return (
        <>
          <div className='Example'>
             {data.pages.map((page,index)=>{
               return <React.Fragment key={index}>
                          {page.results.map(pokemon=>{
                           return <div 
                           className='pokemonCard' 
                           onClick={()=>{navigate(`/pokemon-page/${pokemon.name}`)}}
                           key={pokemon.name}>
                          <h1> {pokemon.name}</h1>
                          <PokemonInfo 
                         
                          url={pokemon.url}/>
                           </div>
                          })}
               </React.Fragment>
             })}
 
 
                 
         </div>
 
         <div className='btn'>
           <button 
           disabled={isFetching}
           onClick={fetchNextPage}>{isFetching? 'Загрузка': 'Загрузить еще'}</button>
         </div>
        </>
 
         
     );
    }
}
