import { router } from 'express';
import pokemonService from '../service/pokemon.service.js';

const pokemonRouter = router();

pokemonRouter.get('/', async (req,res) => {
    try{
        const pokemons = await pokemonService.getAllpokemon()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
})

pokemonRouter.getPokemonById('/', async (req,res) => {
    try{
        const pokemons = await pokemonService.getPokemonById()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
})

pokemonRouter.createPokemon('/', async (req,res) => {
    try{
        const pokemons = await pokemonService.createPokemon()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
})

pokemonRouter.updatePokemon('/', async (req,res) => {
    try{
        const pokemons = await pokemonService.updatePokemon()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
})

pokemonRouter.patchPokemon('/', async (req,res) => {
    try{
        const pokemons = await pokemonService.patchPokemon()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
})

pokemonRouter.deletePokemon('/', async (req,res) => {
    try{
        const pokemons = await pokemonService.deletePokemon()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
})

export default pokemonRouter;