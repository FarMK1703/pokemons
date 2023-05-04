import { createSlice } from "@reduxjs/toolkit";



const initialState={
    pokemons:{}
}

const pokemonStoreSlice=createSlice({

    name:'pokemonStore',
    initialState,
    reducers:{
        addPokemon: (state,action)=>{
            state.pokemons[action.payload.name]=action.payload
        }
    }



})


export const selectPokemons = (state) => state.pokemonStore.pokemons

export const {addPokemon}=pokemonStoreSlice.actions 

export default pokemonStoreSlice.reducer