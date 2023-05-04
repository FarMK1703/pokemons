import React from 'react'
import { useQuery} from '@tanstack/react-query'
import PokemonInfo from '../components/PokemonInfo'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'







export default function MainPage() {
  const navigate=useNavigate()
  
  


  


  


  const {isLoading,error,data}=useQuery({
    queryKey:['fetchData'],
    queryFn: ()=>
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40').then((res)=>res.json()),
        staleTime: 10 * (60 * 1000),
       

  })



 



  if(isLoading) return <Loader/>

  if (error) return <div>{error.message}</div>

  return (
    <div className='Example'>
       
           {data.results.map((item,index)=>{
            return <div  key={index}
                         onClick={()=>{navigate(`/pokemon-page/${item.name}`)}}
                         className='pokemonCard'>


                   <h1>{item.name}</h1>
                   <PokemonInfo url={item.url}/>
                   
            </div>
           })}
        
       
    </div>
  )
}
