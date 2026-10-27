import pokemonService from '../service/pokemon.service.js';

class pokemonController {

async getAllpokemon(req,res)  {
    try{
        const pokemons = await pokemonService.getAllpokemon()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
}

async getPokemonById(req,res) {
    try{
        const pokemons = await pokemonService.getPokemonById()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
}

async createPokemon(req,res)  {
    try{
        const pokemons = await pokemonService.createPokemon()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
}

async updatePokemon(req,res) {
    try{
        const pokemons = await pokemonService.updatePokemon()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
}

async patchPokemon(req,res) {
    try{
        const pokemons = await pokemonService.patchPokemon()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
}

async deletePokemon(req,res) {
    try{
        const pokemons = await pokemonService.deletePokemon()
        res.status(200).json(pokemons)
    } catch (error) {
    console.error(error);
    }
}

}

export const pokemonController = new pokemonController()